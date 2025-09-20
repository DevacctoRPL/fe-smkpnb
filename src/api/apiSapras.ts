import axios from "axios";

// Definisikan tipe untuk data sarana dari API
interface SaranaItem {
  sarana_id: string;
  image: string;
  title: string;
}

// Definisikan tipe SaprasImage
interface SaprasImage {
  id: string;
  src: string;
  title: string;
}

const getSapras = async (): Promise<SaprasImage[]> => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/v1/misc/index`);
    const saranaData: SaranaItem[] = response.data.data.sarana;
    const saprasImages = saranaData.map((item: SaranaItem) => ({
      id: item.sarana_id,
      src: `${import.meta.env.VITE_API_BASE_URL}/storage/${item.image}`,
      title: item.title,
    }));
    return saprasImages;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch sapras data');
  }
};

export { getSapras };
