import { EmailContent } from "@/email/email-base";

// TODO: prova a mettere componente della mail (o solo una parte, togliendo i tag doctype e html) qui per visualizarlo

export const Preview = () => {
    return (
        <div className="w-full h-full bg-zinc-200 flex justify-center items-center">
            <div className="bg-zinc-100">
                <EmailContent />
            </div>
        </div>
    );
}