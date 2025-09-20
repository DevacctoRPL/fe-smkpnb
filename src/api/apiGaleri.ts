import axios from "axios";

// Definisikan tipe untuk data galeri dari API
interface ApiGaleriItem {
  id: number;
  galeri_id: string;
  image: string;
  title: string;
  status: number;
  created_at: string;
  updated_at: string;
}

// Definisikan tipe untuk data galeri yang digunakan di komponen
export interface GaleriItem {
  id: string;
  image: string;
  title: string;
  date: string;
}

const getGaleri = async (): Promise<GaleriItem[]> => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/v1/misc/index`);
    const galeriData: ApiGaleriItem[] = response.data.data.galeri;

    // Map data dari API ke bentuk yang sesuai dengan GaleriItem
    const galeriList = galeriData.map((item: ApiGaleriItem) => ({
      id: item.galeri_id,
      image: `${import.meta.env.VITE_API_BASE_URL}/storage/${item.image}`, // Mengubah path gambar menjadi URL lengkap
      title: item.title,
      date: new Date(item.created_at).toLocaleDateString(), // Format tanggal
    }));

    return galeriList;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch galeri data');
  }
};

export { getGaleri };
