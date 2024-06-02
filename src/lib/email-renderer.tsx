import { EmailBase } from "@/email/email-base";
import { renderAsync } from "@react-email/render";

// TODO: metti dropdown in export per scegliere tra only html e html and plaintext
// TODO: metti download files

// TODO: sistema (non funziona)

export const renderHtml = () => {
    renderAsync(<EmailBase />, {
        pretty: true,
    }).then((html) => {
        return html;
    });
}

export const renderText = () => {
    renderAsync(<EmailBase />, {
        plainText: true,
    }).then((text) => {
        return text;
    });
}