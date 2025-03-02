const apiKeyBot = import.meta.env.VITE_API_KEY_BOT;
const apiKey_CallBackChannel  = import.meta.env.VITE_CHANEL_CALL_BACK_ID;
const apiKey_SupportChannel  = import.meta.env.VITE_CHANEL_SUPPORT_ID;

const baseUrl = `https://api.telegram.org/bot${apiKeyBot}/`;

// modalMode === "callBack" (Get in touch, Banner, Book and callback)
export const sendMessage = async (
    line1: string,
    line2: string,
    line3: string,
    line4: string,
    line5: string,
    line6: string,
    line7: string,
    line8: string,
    line9: string
): Promise<void> => {
    const url = `${baseUrl}sendMessage?chat_id=${apiKey_CallBackChannel}&text=%0A${line1}%0A${line2}%0A${line3}%0A${line4}%0A${line5}%0A${line6}%0A${line7}%0A${line8}%0A${line9}`;
    const response = await fetch(url);

    if (!response.ok) {
        const error = await response.json();
        await Promise.reject(error.description || "Что-то пошло не так ...");
    }
};

// modalMode === "contact-customer-support" (Contact-customer-support)
export const sendCustomerSupportMessage = async (
    line1: string,
    line2: string,
    line3: string,
    line4: string,
    line5: string,
    line6: string,
    line7: string,
    line8: string,
    line9: string
): Promise<void> => {
    const url = `${baseUrl}sendMessage?chat_id=${apiKey_SupportChannel}&text=%0A${line1}%0A${line2}%0A${line3}%0A${line4}%0A${line5}%0A${line6}%0A${line7}%0A${line8}%0A${line9}`;
    const response = await fetch(url);

    if (!response.ok) {
        const error = await response.json();
        await Promise.reject(error.description || "Что-то пошло не так ...");
    }
};


// export const sendMessageMeasurer = async (
//     line1: string,
//     line2: string,
//     line3: string,
//     line4: string,
//     line5: string,
//     line6: string,
//     line7: string,
//     line8: string
// ): Promise<void> => {
//     const url = `${baseUrl}sendMessage?chat_id=${process.env.NEXT_PUBLIC_CHANEL_ZAMER_ID}&text=%0A${line1}%0A${line2}%0A${line3}%0A${line4}%0A${line5}%0A${line6}%0A${line7}%0A${line8}`;
//     const response = await fetch(url);

//     if (!response.ok) {
//         const error = await response.json();

//         await Promise.reject(error.description || "Что-то пошло не так ...");
//     }
// };

// export const sendMessagePismo = async (
//     line1: string,
//     line2: string,
//     line3: string,
//     line4: string,
//     line5: string,
//     line6: string,
//     line7: string,
//     line8: string,
//     line9: string
// ): Promise<void> => {
//     const url = `${baseUrl}sendMessage?chat_id=${process.env.NEXT_PUBLIC_CHANEL_PISMO}&text=%0A${line1}%0A${line2}%0A${line3}%0A${line4}%0A${line5}%0A${line6}%0A${line7}%0A${line8}%0A${line9}`;
//     const response = await fetch(url);

//     if (!response.ok) {
//         const error = await response.json();

//         await Promise.reject(error.description || "Что-то пошло не так ...");
//     }
// };

// export const sendMessageCalculations = async (
//     line1: string,
//     line2: string,
//     line3: string,
//     line4: string,
//     line5: string,
//     line6: string,
//     line7: string,
//     line8: string,
//     // line7: React.JSX.Element
//     line9: File | string
// ): Promise<void> => {
//     console.log("typeof line7: ", typeof line7);
//     const url1 = `${baseUrl}sendMessage?chat_id=${process.env.NEXT_PUBLIC_CHANEL_CALCULATIONS}&text=%0A${line1}%0A${line2}%0A${line3}%0A${line4}%0A${line5}%0A${line6}%0A${line7}%0A${line8}`;
//     const url2 = `${baseUrl}sendDocument`;

//     const formData = new FormData();
//     // @ts-ignore
//     formData.append("chat_id", process.env.NEXT_PUBLIC_CHANEL_CALCULATIONS); // Replace with your chat ID
//     formData.append("document", line9);

//     axios
//         .post(url1)
//         .then((response) => {
//             console.log("Response good:", response.data);
//         })
//         .catch((error) => {
//             if (error.response) {
//                 console.log("response Error: ", error);
//             } else if (error.request) {
//                 console.log("request Error: ", error.request);
//             } else {
//                 // console.log("Error in setting up the request:", error.message);
//             }
//             console.log(error.config);
//         });

//     axios
//         .post(url2, formData, {
//             headers: { "Content-Type": "multipart/form-data" },
//         })
//         .then((response) => {
//             console.log("Response good:", response.data);
//         })
//         .catch((error) => {
//             if (error.response) {
//                 console.log("response Error: ", error);
//             } else if (error.request) {
//                 console.log("request Error: ", error.request);
//             } else {
//                 console.log("Error in setting up the request:", error.message);
//             }
//             console.log(error.config);
//         });

// };
