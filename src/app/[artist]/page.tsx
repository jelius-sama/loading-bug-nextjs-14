import testServerAction from "@/server/action";
import { Metadata, ServerRuntime } from "next";

export const runtime: ServerRuntime = "edge";

export const generateMetadata = async ({ params }: { params: { artist: string } }): Promise<Metadata> => {
    const resFromServer = await testServerAction();
    
    return {
        title: params.artist,
        description: resFromServer,
    }
}

export default async function Artist({ params }: { params: { artist: string } }) {
    const resFromServer = await testServerAction();

    return (
        <div>
            <p className="font-bold text-lg">Artist Page</p>
            <p>From server: <span className="text-green-400">{resFromServer}</span></p>
            <p>From params: <span className="text-green-400">[artist]: <span className="underline">{params.artist}</span></span></p>
        </div>
    );
}
