import ethlogo from '../assets/ethlogo.png'
import { connectWallet } from '../Adulam'
import { useGlobalState } from '../store'


const Header = () => {
  const [connectedAccount] = useGlobalState('connectedAccount')
  return (
    <nav className="w-4/5 flex md:justify-center justify-between items-center py-4 mx-auto">
      <div className="flex flex-row justify-start items-center md:flex-[0.5] flex-initial">
        <img className="w-8 cursor-pointer" src={ethlogo} alt="Adulam Logo" />
        <span className="text-white text-2xl ml-2">NFT Project</span>
      </div>

      <ul
        className="md:flex-[0.5] text-white 
        md:flex hidden list-none flex-row 
        justify-between items-center flex-initial"
      >
        <li className="mx-4 cursor-pointer">
          SlideShow
          </li>
        <li className="mx-4 cursor-pointer">Roadmap</li>
        <li className="mx-4 cursor-pointer">FAQs</li>
      </ul>

      {connectedAccount ? null : (
        <button
          className="shadow-xl shadow-black text-white 
        bg-[#e32970] hover:bg-[#bd255f] md:text-xs p-2
        rounded-full cursor-pointer"
          onClick={connectWallet}
        >
          Connect Wallet
        </button>
      )}
    </nav>
  )
}

export default Header
