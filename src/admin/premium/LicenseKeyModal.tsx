import { Button, Modal, TextControl, Notice } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { useState, type KeyboardEvent } from "react";
import apiFetch from "@wordpress/api-fetch";
import Kbd from "../../components/Kbd";
import { adminConfig } from "../app-config";

export default function LicenseKeyModal({
  isOpen,
  onRequestClose,
}: {
  isOpen: boolean;
  onRequestClose: () => void;
}) {
  const [licenseKey, setLicenseKey] = useState("");
  const [isBusy, setIsBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) {
    return null;
  }

  const handleConfirm = async () => {
    if (!licenseKey || isBusy) {
      return;
    }

    setIsBusy(true);
    setError(null);

    try {
      await apiFetch({
        path: adminConfig.licenseConfig.path,
        method: "POST",
        data: { license_key: licenseKey },
      });

      window.location.reload();
    } catch (err: any) {
      setError(
        err.message ||
          __("An error occurred while verifying the license.", "minimal-map"),
      );
    } finally {
      setIsBusy(false);
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (isBusy || event.key !== "Enter" || event.shiftKey) {
      return;
    }

    const target = event.target;
    if (
      target instanceof HTMLElement &&
      target.closest('[data-minimal-map-dialog-ignore-enter="true"]')
    ) {
      return;
    }

    event.preventDefault();
    void handleConfirm();
  };

  return (
    <Modal
      title={__("Enter License Key", "minimal-map")}
      onRequestClose={onRequestClose}
      shouldCloseOnClickOutside={!isBusy}
      shouldCloseOnEsc={!isBusy}
      onKeyDown={handleKeyDown}
    >
      <div
        className="minimal-map-admin__license-dialog"
        style={{ maxWidth: "400px" }}
      >
        <div style={{ marginBottom: "24px" }}>
          <TextControl
            label={__("License Key", "minimal-map")}
            value={licenseKey}
            onChange={setLicenseKey}
            placeholder="XXXX-XXXX-XXXX-XXXX"
            disabled={isBusy}
            autoFocus
          />
        </div>

        {error && (
          <div style={{ marginBottom: "24px" }}>
            <Notice status="error" isDismissible={false}>
              {error}
            </Notice>
          </div>
        )}

        <div
          className="minimal-map-admin__collection-delete-dialog-actions"
          style={{ display: "flex", gap: "12px", justifyContent: "flex-end" }}
        >
          <Button
            variant="tertiary"
            onClick={onRequestClose}
            disabled={isBusy}
            data-minimal-map-dialog-ignore-enter="true"
          >
            {__("Cancel", "minimal-map")}
          </Button>
          <Button
            variant="primary"
            onClick={() => void handleConfirm()}
            isBusy={isBusy}
            disabled={isBusy || !licenseKey}
          >
            <span className="minimal-map-admin__location-dialog-button-content">
              <span>{__("Confirm", "minimal-map")}</span>
              <Kbd variant="blue">Enter</Kbd>
            </span>
          </Button>
        </div>
      </div>
    </Modal>
  );
}
