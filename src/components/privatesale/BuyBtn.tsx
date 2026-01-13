"use client";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { BuyBtnIcon, BuyTokenModelBgicon, CrossIcon } from "../icons/Icons";

import { useWeb3Modal } from "@web3modal/wagmi/react";
import {
  BaseError,
  BlockTag,
  ContractFunctionRevertedError,
  decodeEventLog,
  formatEther,
  parseAbiItem,
} from "viem";
import {
  useWriteContract,
  useAccount,
  useReadContract,
  useWaitForTransactionReceipt,
} from "wagmi";
import {
  smartWhalesTokenContract,
  smartWhalesPresaleContract,
  usdtContract,
  activeChain,
  publicClient,
} from "@/config";

interface buyTokenProps {
  hideData: any;
  setHideData: any;
  usdtAmount: string;
}
const BuyBtn: React.FC<buyTokenProps> = ({
  hideData,
  setHideData,
  usdtAmount,
}) => {
  const { toast } = useToast();
  let [isOpen, setIsOpen] = useState(false);

  const { address, isConnected, isDisconnected } = useAccount();
  const { open } = useWeb3Modal();
  const [transactionInProgress, setTransactionInProgress] = useState(false);
  const { data: hash, writeContractAsync } = useWriteContract();
  const { isSuccess: isTransactionSuccessful } = useWaitForTransactionReceipt({
    hash,
    pollingInterval: 1_000,
    chainId: activeChain.id,
    confirmations: 1,
  });

  const { data: presaleStartTime } = useReadContract({
    address: smartWhalesPresaleContract.address,
    abi: smartWhalesPresaleContract.abi,
    functionName: "presaleStartTime",
    query: {
      refetchInterval: 10000,
    },
  });
  const { data: isPresalePaused } = useReadContract({
    address: smartWhalesPresaleContract.address,
    abi: smartWhalesPresaleContract.abi,
    functionName: "presalePaused",
    query: {
      refetchInterval: 10000,
    },
  });
  const { data: hasPresaleEnded } = useReadContract({
    address: smartWhalesPresaleContract.address,
    abi: smartWhalesPresaleContract.abi,
    functionName: "presaleEnded",
    query: {
      refetchInterval: 10000,
    },
  });
  const { data: usdtDecimals } = useReadContract({
    address: usdtContract.address,
    abi: usdtContract.abi,
    functionName: "decimals",
  });
  console.log("presaleStartTime", presaleStartTime);
  console.log("isPresalePaused", isPresalePaused);
  console.log("hasPresaleEnded", hasPresaleEnded);
  console.log("usdtDecimals", usdtDecimals);

  const buyTokens = async () => {
    if (isDisconnected || !isConnected || !address) {
      toast({
        title: "Error",
        duration: 5000,
        description: "Please connect your wallet",
        // variant: "destructive",
        action: (
          <ToastAction altText="Connect Wallet" onClick={() => open()}>
            {"Connect Wallet"}
          </ToastAction>
        ),
      });
      return;
    }

    if (isPresalePaused) {
      toast({
        title: "Error",
        description: "Presale is paused. Try again later.",
        duration: 5000,
      });
      return;
    }
    if (hasPresaleEnded) {
      toast({
        title: "Error",
        description: "Presale has ended.",
        duration: 5000,
      });
      return;
    }
    console.log("current time", Math.floor(Date.now() / 1000));
    if (
      presaleStartTime == 0 ||
      (presaleStartTime as bigint) > Math.floor(Date.now() / 1000)
    ) {
      toast({
        title: "Error",
        description: "Presale has not yet started. Try again later.",
        duration: 5000,
      });
      return;
    }

    try {
      const usdtAmountWithDecimals =
        (BigInt(Number(usdtAmount) * 10 ** 3) *
          BigInt(10 ** (usdtDecimals ?? 18))) /
        BigInt(10 ** 3);
      const veryLargeAmount = BigInt(
        "0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"
      );

      const currentAllowance = await publicClient.readContract({
        address: usdtContract.address,
        abi: usdtContract.abi,
        functionName: "allowance",
        args: [address, smartWhalesPresaleContract.address],
      });

      // Check if the allowance is enough
      if (currentAllowance < usdtAmountWithDecimals) {
        // toast.info(
        //   "Please approve the staking smart contract to spend your tokens for staking."
        // );
        toast({
          title: "Action required",
          description:
            "Please approve the $SHWALES presale smart contract to spend your USDT.",
          duration: 5000,
        });

        const result = await writeContractAsync({
          address: usdtContract.address,
          abi: usdtContract.abi,
          functionName: "approve",
          args: [smartWhalesPresaleContract.address, veryLargeAmount],
        });

        console.log("Write contract result (Approve):", result);

        const transaction = await publicClient.waitForTransactionReceipt({
          hash: result,
        });

        toast({
          title: "Approval successful",
          description:
            "Now, please proceed with your transaction to purchase tokens.",
          duration: 5000,
        });

        console.log("Transaction receipt:", transaction);
      }

      // Stake tokens
      const buyTokens = await writeContractAsync({
        address: smartWhalesPresaleContract.address,
        abi: smartWhalesPresaleContract.abi,
        functionName: "buyTokens",
        chainId: activeChain.id,
        args: [usdtAmountWithDecimals],
      });

      console.log("Write contract result (buyTokens):", buyTokens);

      //use the hash with viem usewaitfortransactionreceipt

      const getTransaction = await publicClient.waitForTransactionReceipt({
        hash: buyTokens,
      });

      console.log("Transaction receipt:", getTransaction);

      if (getTransaction.status === "success") {
        // toast.success("Tokens staked successfully!");
        toast({
          title: "Success",
          description: "Successfully purchased $SWAHLES tokens!",
          duration: 5000,
        });
        openModal();
      }
    } catch (error) {
      console.log(error, "error");
      if (error instanceof BaseError) {
        const revertError = error.walk(
          (err) => err instanceof ContractFunctionRevertedError
        );
        if (revertError instanceof ContractFunctionRevertedError) {
          const errorName = revertError.data?.args ?? "";

          console.log(errorName, "error name");
          toast({
            title: "Error",
            duration: 5000,
            description: `${errorName[0]}`,
            variant: "destructive",
          });
        } else {
          // toast.error("Something went wrong. Please try again.");
          toast({
            title: "Error",
            duration: 5000,
            description: "Something went wrong. Please try again.",
            variant: "destructive",
          });
        }
      } else {
        toast({
          title: "Error",
          duration: 5000,
          description: "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    }
  };

  function closeModal() {
    setIsOpen(false);
    setHideData(false);
  }

  function openModal() {
    setIsOpen(true);
    setHideData(true);
  }

  return (
    <>
      <div className="flex w-full items-center justify-center">
        <button
          type="button"
          onClick={buyTokens}
          disabled={Number(usdtAmount) == 0}
          className="flex gap-2.5 rounded-[30px] bg-white px-10 py-[18px] font-inter text-base font-bold uppercase leading-normal text-[#5200FF] shadow-[0px_4px_50px_0px_#BD9EFF] duration-300 hover:scale-110"
        >
          <BuyBtnIcon />
          Buy now
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black" />
          </Transition.Child>

          <div className="fixed inset-0  overflow-y-auto">
            <div className="flex min-h-full items-center justify-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className=" w-full max-w-[514px] transform overflow-hidden px-3 transition-all  sm:px-0">
                  <div className="mx-auto flex flex-col gap-2  sm:gap-4 xl:px-0  ">
                    <h1 className="text-center font-inter text-[28px] font-medium leading-[128%] text-white sm:text-[48px] sm:font-semibold sm:leading-[125%]">
                      Buy $SWHALE token
                    </h1>
                    <h2 className="text-sm: text-center font-inter font-normal leading-[142%] text-white sm:text-[21px]">
                      Invest into the new standart of on-chain trading
                    </h2>
                  </div>

                  <div className="mt-[73px] flex w-full flex-col gap-5 rounded-[20px] bg-[rgba(255,255,255,0.10)] px-5 pb-[60px] pt-5 text-center">
                    <button
                      type="button"
                      className="inline-flex w-full justify-end"
                      onClick={closeModal}
                    >
                      <CrossIcon />
                    </button>
                    <div className="flex items-center justify-center gap-2.5">
                      <Image
                        src="/private-sale/check-icon.png"
                        width={29}
                        height={29}
                        alt="img"
                      />
                      <p className="font-inter text-xl font-normal leading-[150%] text-[#10CB99]">
                        Success
                      </p>
                    </div>
                    <p className="font-inter text-lg font-normal leading-[166%] text-white">
                      Thank you for buying. Transaction was successfull!
                    </p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
              <div className="fixed left-0 right-0 top-1/2 mx-auto h-[169px] w-full max-w-[1070px] bg-[rgba(82,0,255,0.60)] blur-[150px]">
                {/* <BuyTokenModelBgicon /> */}
              </div>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
export default BuyBtn;
