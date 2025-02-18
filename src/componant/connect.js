import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useChainId } from "wagmi";

const Connect = () => {
  const chain = useChainId();

  console.log(chain);

  return (
    <div
      className="app-center"
      style={{ padding: "20px", textAlign: "center" }}
    >
      <h1>Web3 Wallet</h1>
      <ConnectButton
        accountStatus="avatar"
        chainStatus="name"
        showBalance={true}
      />
    </div>
  );
};

export default Connect;
