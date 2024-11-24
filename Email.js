import * as MailComposer from "expo-mail-composer";
import { useState } from "react";

export default function SendEmail() {
  const [isEmailAvailable, setIsEmailAvailable] = useState(false);

  const emailAvailability = async () => {
    const isAvailable = await MailComposer.isAvailableAsync();
    setIsEmailAvailable(isAvailable);
    if (!isAvailable) {
        alert("No mail app is available on this device!");
        return; 
      }

      const options = {
        recipients: [],
        subject: "Hello from Math trainer app",
        body: "",
        attachments: [],
      };

      try {
        const result = await MailComposer.composeAsync(options);
        if (result.status === "sent") {
          console.log("Email sent successfully");
        } else if (result.status === "cancelled")
        {
          console.log("Email was cancelled");
        }
      } catch (error) {
        console.error("Failed to send email:", error);
      }
    
  };
 return { emailAvailability };
} 
