import { MessageCircleIcon } from "lucide-react";
import styles from "./index.module.scss";
import { useTranslation } from "react-i18next";

export const WhatsappFab = () => {
  const { t } = useTranslation("translation", {
    keyPrefix: "info",
  });

  const handleClick = `https://wa.me/${
    import.meta.env.VITE_WHATSAPP_PHONE
  }?text=${encodeURIComponent(t("wa-text"))}`;

  return (
    <a
      href={handleClick}
      target="_blank"
      rel="noopener noreferrer"
      className={styles["whatsapp-button"]}
    >
      <MessageCircleIcon size={28} />
    </a>
  );
};
