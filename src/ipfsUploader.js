import axios from 'axios';
const pinataApiKey = `8fb27294f2806c2a0469`;
const pinataApiSecret = `91e89f0a0a92f06215588c5ecd23a761aeb3dd763510aceb2703bdf67f28221c` ;

const pinataApiUrl = 'https://api.pinata.cloud/pinning/pinFileToIPFS';

const pinataHeaders = {
  headers: {
    'Content-Type': 'multipart/form-data',
    pinata_api_key: pinataApiKey,
    pinata_secret_api_key: pinataApiSecret,
  },
};

export async function uploadToIPFS(file) {
  const formData = new FormData();
  formData.append('file', file);

  try {
    const response = await axios.post(pinataApiUrl, formData, pinataHeaders);
    const ipfsHash = response.data.IpfsHash;
    return `https://gateway.pinata.cloud/ipfs/${ipfsHash}`;
  } catch (error) {
    console.error('Error uploading file to Pinata:', error);
    throw error;
  }
}
