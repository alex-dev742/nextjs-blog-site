"use server";

export async function createPost(formData: FormData) {
  console.log("Creating post with data:", formData.get("title"));
}
