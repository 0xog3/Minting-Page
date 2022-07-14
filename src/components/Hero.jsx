import avatar from '../assets/owner.jpg'
import github from '../assets/github_icon.png'
import facebook from '../assets/facebook_icon.png'
import twitter from '../assets/twitter_icon.png'
import linkedIn from '../assets/linkedIn_icon.png'
import medium from '../assets/medium_icon.png'
import {
  setAlert,
  useGlobalState,
  setGlobalState,
  setLoadingMsg,
} from '../store'
import { BASE_URI, payForArt } from '../Adulam'

const Hero = () => {
  const [connectedAccount] = useGlobalState('connectedAccount')
  const [maxSupply] = useGlobalState('maxSupply')
  const [nfts] = useGlobalState('nfts')

  const mint = async () => {
    setGlobalState('loading', { show: true, msg: 'Retrieving IPFS data...' })
    const nextTokenIndex = Number(nfts.length + 1)

    fetch(`${BASE_URI + nextTokenIndex}.json`)
      .then((data) => data.json())
      .then((res) => {
        setLoadingMsg('Intializing transaction...')
        payForArt({ ...res, buyer: connectedAccount }).then((result) => {
          if (result) {
            setGlobalState('loading', { show: false, msg: '' })
            setAlert('Minting Successful...', 'green')
            window.location.reload()
          }
        })
      })
      .catch((error) => {
        setGlobalState('loading', { show: false, msg: '' })
        console.log(error)
      })
  }

  return (
    <div
      className="bg-[url('https://cdn.pixabay.com/photo/2022/03/01/02/51/galaxy-7040416_960_720.png')]
        bg-no-repeat bg-cover"
    >
      <div className="flex flex-col justify-center items-center mx-auto py-10">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-white text-5xl font-bold text-center">
            Your Art <br />
            <span className="text-gradient">NFTs</span> Collection
          </h1>

          <p className="text-white font-semibold text-sm mt-3">
            Mint and collect the hottest NFTs around.
          </p>

          <button
            className="shadow-xl shadow-black text-white
            bg-[#e32970] hover:bg-[#bd255f] p-2
            rounded-full cursor-pointer my-4"
            onClick={mint}
          >
            Mint Now
          </button>

          <a
            href="https://www.linkedin.com/in/george-r-b957aab0/"
            className="flex flex-row justify-center space-x-2 items-center
            bg-[#000000ad] rounded-full my-4 pr-3 cursor-pointer"
          >
            <img
              className="w-11 h-11 object-contain rounded-full"
              src={avatar}
              alt="Adulam Logo"
            />
            <div className="flex flex-col font-semibold">
              <span className="text-white text-sm">0xf55...146a</span>
              <span className="text-[#e32970] text-xs">Doggies</span>
            </div>
          </a>

          <p className="text-white text-sm font-medium text-center">
            George Rivas kick-started his journey as a software engineer in
            2019. <br /> Over the years, he has grown full-blown skills in
            JavaScript stacks such as <br /> React, NextJs, and now
            blockchain.
          </p>


          <div
            className="shadow-xl shadow-black flex flex-row
            justify-center items-center w-10 h-10 rounded-full
          bg-white cursor-pointer p-3 ml-4 text-black 
            hover:bg-[#bd255f] hover:text-white transition-all
            duration-75 delay-100"
          >
            <span className="text-xs font-bold">
              {nfts.length}/{maxSupply}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
