import supabase from "../config/Superbase";

export async function getData() {
    const { data, error } = await supabase
        .from("items")
        .select()
    if (error) {
        console.log("something went wrong");
        return { data: null, error }
    }
    if (data) {
        return { data, error: null }
    }
}