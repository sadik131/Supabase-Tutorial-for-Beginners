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

export async function addItem(name, text, stock) {
    const { data, error } = await supabase
        .from('items')
        .insert([{ name, stock, text }])
    if (error) {
        console.log("something went wrong");
        return { data: null, error }
    }
    if (data) {
        return { data, error: null }
    }
}

export async function findById(id) {
    const {data,error} = await supabase
    .from('items')
    .select()
    .eq('id',id)
    .single()
    if (error) {
        console.log("something went wrong");
        return { data: null, error }
    }
    if (data) {
        return { data, error: null }
    }
}