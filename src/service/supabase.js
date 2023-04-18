import { createClient } from "@supabase/supabase-js";

// para conectarnos a supabase vamos a requerir 2 variables
const url = "https://aydxfzrycesmviggoxup.supabase.co";
const publicKey = 
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF5ZHhmenJ5Y2VzbXZpZ2dveHVwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE3OTIzNjcsImV4cCI6MTk5NzM2ODM2N30.tnfTt_FxFlERCfkuwqgt8KuVVka7GMcvN5Kjtb_n-lw";

const supabase = createClient(url, publicKey);

// Funcion para poder crear una cuenta
export async function signUp(user) {
    const { data, error } = await supabase.auth.signUp(user);

    if (error) {
        console.log("error", error);
        return {
            ok: false,
            error,
        }
    }

    return {
        ok: true,
        data,
    };
};


// Funcion para iniciar session
export async function signIn(user) {
    const { data, error } = await supabase.auth.signInWithPassword(user);

    if (error) {
        console.log("error", error);
        return {
            ok: false,
            error,
        }
    }

    return {
        ok: true,
        data,
    };
}