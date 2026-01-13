import { cn } from "@/lib/utils";

import { ChevronDown, ChevronUp, WalletIcon } from "./icons/Icons";

import {
  useWalletInfo,
  useWeb3Modal,
  useWeb3ModalState,
} from "@web3modal/wagmi/react";
import { useAccount, useBalance } from "wagmi";
import { activeChain } from "@/config";

interface WalletIconWithDataProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  iconData: string; // Expect a string that contains a data URL for an SVG
}
export const WalletIconWithData: React.FC<WalletIconWithDataProps> = ({
  iconData,
  className,
  style,
  ...props
}) => {
  return (
    // Disabling the warning as this is an SVG and will not benefit from next/image's optimization
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={iconData}
      alt="Wallet Icon"
      className={cn("h-6 w-6", className)}
      {...props}
    />
  );
};

export const ConnectWalletButton = ({
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  // Docs for hooks: https://docs.walletconnect.com/web3modal/nextjs/hooks
  const { walletInfo } = useWalletInfo();
  const { open, close } = useWeb3Modal();
  const { address, isConnecting, isDisconnected } = useAccount();
  const { open: isModalOpen, selectedNetworkId } = useWeb3ModalState();
  const balance = useBalance({
    address: address,
    chainId: activeChain.id,
    scopeKey: "connect-button",
    query: {
      enabled: !!address,
    },
  });

  // Determine the background and text color based on whether the wallet is connected
  const isConnected = !isDisconnected && address;
  const bgColor = isConnected ? "bg-primaryDark-500" : "bg-white";
  const textColor = isConnected ? "text-white" : "text-[rgba(11,12,25,0.80)]";
  const borderProps = isConnected
    ? "border-[2px] border-transparent hover:border-primaryDark-500"
    : "border-[2px] border-white";

  console.log(walletInfo?.name, walletInfo?.icon);
  console.log(address, isConnecting, isDisconnected);
  console.log(balance);

  return (
    <button
      className={cn(
        "font-Inter group flex items-center justify-center gap-[10px] rounded-[30px] px-5 py-3 text-sm font-bold capitalize leading-normal duration-300",
        bgColor, // Background color based on connection status
        textColor, // Text color based on connection status\
        borderProps, // Border properties based on connection status
        "hover:bg-transparent hover:text-white", // Styles for hover state
        className // Additional classes passed via props
      )}
      onClick={() => open()}
      {...props}
    >
      {!isConnected ? (
        <>
          <WalletIcon className="h-4 w-4 md:h-5 md:w-5" />
          {"Connect Wallet"}
        </>
      ) : (
        <>
          {walletInfo ? (
            <WalletIconWithData
              className="h-4 w-4 md:h-5 md:w-5"
              iconData={walletInfo!.icon!}
            />
          ) : (
            <WalletIcon className="h-4 w-4 md:h-5 md:w-5" />
          )}
          <span className="text-xs md:text-sm">
            {address.slice(0, 6) + "..." + address.slice(-4)}
          </span>
          {isModalOpen ? (
            <ChevronUp width={"18"} height={"18"} color="#ABABAB" />
          ) : (
            <ChevronDown width={"18"} height={"18"} color="#ABABAB" />
          )}
        </>
      )}
    </button>
  );
};
