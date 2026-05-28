import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function GET(): Promise<Response> {
  try {
    const result = await cloudinary.api.resources({
      resource_type: "video",
      type: "upload",
      max_results: 50,
    });

    const urls: string[] = result.resources.map(
      (r: { secure_url: string }) => r.secure_url
    );

    return Response.json({ urls });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return Response.json({ error: message }, { status: 500 });
  }
}
