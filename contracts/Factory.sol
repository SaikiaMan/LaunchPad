pragma solidity 0.8.27;


import {Token} from "../Token.sol";

contract Fatotry {
    uintt256 public immutable fee;
    address public owner;

    address[] public tokens;

    constructor(uint256 _fee){
        fee = _fee;
        owner = msg.sender;
    }

    function create(
        string memory _name,
        string memory _symbol,
        ) {
            // create new Token 
            Token token = new Token(msg.sender, _name, _symbol, 1_000_000 ether);

            // Save token for later use
            tokens.push(adress(token));
            

            totalTokens++;
        }
}