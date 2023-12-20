import { //NextApiRequest,
       NextApiResponse } from "next";
import fs from 'fs';
import path from 'path';

type ErrorResponse = {
  error: string;
};

type PagesData = {
  pages: string[];
} | ErrorResponse;

export default function handler(
      //req: NextApiRequest,
      res: NextApiResponse<PagesData>) {
  try {
    const pagesDirectory = path.join(process.cwd(), 'src/pages/');
    const pageFiles = fs.readdirSync(pagesDirectory);
    const pageNames = pageFiles.map((file) => file.replace('.tsx', ''));
    res.status(200).json({ pages: pageNames });
  } catch (error) {
    console.error("Error reading pages:", error);

    const errorMessage = error instanceof Error ? error.message : "Internal Server Error";
    res.status(500).json({ error: errorMessage });
  }
}
