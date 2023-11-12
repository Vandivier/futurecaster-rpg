import { createClient, SupabaseClient } from "@supabase/supabase-js";

export default class SupabaseService {
  private supabase: SupabaseClient;
  private url: string = "your-supabase-url";
  private key: string = "your-supabase-key";

  constructor() {
    this.supabase = createClient(this.url, this.key);
  }

  async getCharacters() {
    let { data, error } = await this.supabase.from("characters").select("*");
    if (error) {
      console.log("Error: ", error);
      return null;
    } else return data;
  }

  async getPlaces() {
    let { data, error } = await this.supabase.from("places").select("*");
    if (error) {
      console.log("Error: ", error);
      return null;
    } else return data;
  }

  async getSkills() {
    let { data, error } = await this.supabase.from("skills").select("*");
    if (error) {
      console.log("Error: ", error);
      return null;
    } else return data;
  }

  async getRaces() {
    let { data, error } = await this.supabase.from("races").select("*");
    if (error) {
      console.log("Error: ", error);
      return null;
    } else return data;
  }

  async getItems() {
    let { data, error } = await this.supabase.from("items").select("*");
    if (error) {
      console.log("Error: ", error);
      return null;
    } else return data;
  }

  async uploadBlob(file: File) {
    const { data, error } = await this.supabase.storage
      .from("blobs")
      .upload(file.name, file);
    if (error) {
      console.log("Error: ", error);
      return null;
    } else return data;
  }

  async downloadBlob(filename: string) {
    const { data, error } = await this.supabase.storage
      .from("blobs")
      .download(filename);
    if (error) {
      console.log("Error: ", error);
      return null;
    } else return data;
  }
}
