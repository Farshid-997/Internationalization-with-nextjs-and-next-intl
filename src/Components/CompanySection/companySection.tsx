import { NextIntlClientProvider, useMessages } from "next-intl";
import Companies from "../Companies/Companies";


export default function CompanySection() {
    const messages = useMessages();

    // Type assertion to specify the expected type of messages.CompanyLogoSection
    const companyLogoSectionMessages = messages.CompanyLogoSection as Record<string, string>;

    // Access the 'partners' property
    const partnersMessage = companyLogoSectionMessages?.partners || "";

    console.log(partnersMessage)
    return (
        <NextIntlClientProvider messages={{ CompanyLogoSection: partnersMessage }}>
            <div className="mx-auto my-20 max-w-screen-xl px-4 lg:px-8 mt-4">
                <h1 className="my-16 text-center text-4xl font-bold text-[#1E3CBA] dark:text-slate-100">
                    {partnersMessage}
                </h1>
                <Companies />
            </div>
        </NextIntlClientProvider>
    );
}
