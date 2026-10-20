export type Show = {
  date: string; // tulis langsung, mis. "7 November 2026"
  name: string;
  place: string;
  link?: string; // tiket / info acara (opsional)
};

// Isi jadwal di sini. Kosongkan array untuk menampilkan pesan "belum diumumkan".
export const shows: Show[] = [
  // { date: "7 November 2026", name: "Nama Acara", place: "Kota, Venue", link: "https://..." },
];
