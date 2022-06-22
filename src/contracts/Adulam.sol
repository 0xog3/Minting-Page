// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

import "./ERC721.sol";
import "./ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Adulam is ERC721Enumerable, Ownable {
    using Strings for uint256;

    mapping(string => uint8) public existingURIs;
    uint256 public cost = 0.01 ether;
    uint256 public maxSupply = 100;
    uint256 public supply;
    string public baseURI;

    event Sale(
        uint256 id,
        address indexed from,
        address indexed to,
        uint256 cost,
        string metadataURI,
        uint256 timestamp
    );

    struct SaleStruct {
        uint256 id;
        address from;
        address to;
        uint256 cost;
        string title;
        string description;
        uint256 timestamp;
    }

    SaleStruct[] minted;

    constructor(
        string memory _name,
        string memory _symbol,
        string memory _baseURI
    ) ERC721(_name, _symbol) {
        supply = totalSupply();
        baseURI = _baseURI;
    }

    function payToMint(string memory title, string memory description) public payable {
        require(supply <= maxSupply, "Sorry, all NFTs have been minted!");
        require(msg.value > 0 ether, "Ether too low for minting!");
        require(msg.sender != owner(), "This is not permitted!");

        supply += 1;
        string memory URI = concat(Strings.toString(supply + 1));
        existingURIs[URI] = 1;

        sendMoneyTo(owner(), msg.value);

        minted.push(
            SaleStruct(
                supply,
                msg.sender,
                owner(),
                msg.value,
                title,
                description,
                block.timestamp
            )
        );

        emit Sale(supply, msg.sender, owner(), msg.value, URI, block.timestamp);
        _safeMint(msg.sender, supply);
    }

    function getAllNFTs() public view returns (SaleStruct[] memory) {
        return minted;
    }
    
    function getAnNFTs(uint256 tokenId) public view returns (SaleStruct memory) {
        return minted[tokenId - 1];
    }

    function concat(string memory str) internal view returns (string memory) {
        return string(abi.encodePacked(baseURI, "", str));
    }

    function sendMoneyTo(address to, uint256 amount) internal {
        (bool success1, ) = payable(to).call{value: amount}("");
        require(success1);
    }
}
