// #Read Data From The Solana Network

// 1. devnet 연결 및 account 잔액 확인
// import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";

// const publicKey = new PublicKey("GWZFUBvM7Gi7TXkJ5XxMyPeyf72ru7Ewqzk2xHhedkVd");
// const connection = new Connection("https://api.devnet.solana.com", "confirmed");
// const balanceInLamports = await connection.getBalance(publicKey); // 이 키워드는 async 함수 안에서 비동기 작업이 완료될 때까지 기다리도록 하는 역할을 합니다. 즉, getBalance는 네트워크 요청을 통해 블록체인에서 데이터를 가져오는 작업이므로 시간이 소요되는데, await를 사용하여 이 작업이 완료될 때까지 코드 실행을 일시 중지합니다. 요청이 완료되면 잔액이 반환되고 balanceInLamports 변수에 저장됩니다.
// const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;

// // 테스트용 SOL 에어드랍: https://faucet.solana.com/
// console.log(
//     `💰 Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL}!`,
//   );


// 2. 친구의 account 잔액 확인
// import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";

// const suppliedPublickey = process.argv[2];
// if (!suppliedPublickey) {
//     throw new Error("Provide a public key to check the balance of!");
// }

// const connection = new Connection("https://api.devnet.solana.com", "confirmed");
// const publicKey = new PublicKey(suppliedPublickey);
// const balanceInLamports = await connection.getBalance(publicKey);

// const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;
 
// console.log(
//   `✅ Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL}!`,
// );


// 3. 챌린지 1 _ 유효하지 않은 주소 값에 대한 예외 처리 추가
// import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";

// const suppliedPublickey = process.argv[2];
// if (!suppliedPublickey) {
//     throw new Error("Provide a public key to check the balance of!");
// }

// const connection = new Connection("https://api.devnet.solana.com", "confirmed");

// let publicKey;
// try {
//     publicKey = new PublicKey(suppliedPublickey);
// } catch (error) {
//     throw new Error("Invalid public key format. Please provide a valid public key.");
// }

// const balanceInLamports = await connection.getBalance(publicKey);

// const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;
 
// console.log(
//   `✅ Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL}!`,
// );


// 4. mainNet의 유명한 Solana 지갑 잔액 확인 -> toly: GgJJRwLg9NzFQ97o1CJLGLp1KLSUMBwFc6eQNVEr4fbW has 57.215098494 SOL
import { Connection, LAMPORTS_PER_SOL, PublicKey, clusterApiUrl } from "@solana/web3.js";

const suppliedPublickey = process.argv[2];
if (!suppliedPublickey) {
    throw new Error("Provide a public key to check the balance of!");
}

const connection = new Connection(clusterApiUrl("mainnet-beta")); // mainnet-beta, testnet, devnet

let publicKey;
try {
    publicKey = new PublicKey(suppliedPublickey);
} catch (error) {
    throw new Error("Invalid public key format. Please provide a valid public key.");
}

const balanceInLamports = await connection.getBalance(publicKey);

const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;
 
console.log(
  `✅ Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL}!`,
);
