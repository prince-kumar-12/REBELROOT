import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProductBySlug, products } from "@/lib/products";
import { Eyebrow } from "@/components/ui/Badge";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) return {};

  return {
    title: `${product.name} Privacy Policy`,
    description:
      "Omni Browser is built on a strict privacy-first, on-device-first architecture. Read our full data declarations and Google Play Safety guidelines.",
  };
}

export default async function ProductPrivacyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  return (
    <section className="section-pad pb-24 pt-40 lg:pt-48">
      <div className="mx-auto max-w-5xl">
        <Eyebrow>{product.name} · Legal</Eyebrow>

        <h1 className="mt-6 text-4xl font-medium text-ink sm:text-5xl">
          Privacy Policy &amp; Data Safety
        </h1>

        <p className="mt-4 text-sm text-ink-faint">
          Last Updated: June 10, 2026
        </p>

        <div className="prose-invert mt-12 space-y-10">
          {/* Metadata */}
          <div className="rounded-xl2 border border-base-border bg-base-card p-6 sm:p-8">
            <p>
              <strong className="text-ink">Last Updated:</strong> June 10,
              2026
            </p>

            <p className="mt-2">
              <strong className="text-ink">Publisher:</strong> RebelRoot
            </p>

            <p className="mt-2">
              <strong className="text-ink">App Name:</strong> Omni Browser
            </p>

            <p className="mt-2">
              <strong className="text-ink">Package Name:</strong>{" "}
              <code className="rounded bg-base-raised px-1.5 py-0.5">
                com.rebelroot.omni
              </code>
            </p>
          </div>

          {/* Introduction */}
          <PolicySection title="">
            <p className="text-base leading-7 sm:text-lg">
              This document details the Privacy Policy and Data Security
              configurations for Omni Browser. Because Omni Browser is built
              on a strict privacy-first, on-device-first architecture, the
              application does not collect, monitor, store, or share any user
              personal information on remote servers.
            </p>
          </PolicySection>

          {/* 1. Privacy Policy */}
          <PolicySection title="1. Privacy Policy">
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-medium text-ink">
                  1.1 Data Collection &amp; Transmission
                </h3>

                <ul className="mt-4 list-disc space-y-4 pl-5">
                  <li>
                    <strong className="text-ink">
                      Zero Remote Storage:
                    </strong>{" "}
                    RebelRoot does not host any backend databases, account
                    servers, or analytics pipelines for Omni Browser. All
                    browsing history, bookmarks, open tabs, cookies, and locker
                    files remain entirely on your local device.
                  </li>

                  <li>
                    <strong className="text-ink">
                      No Telemetry / Analytics:
                    </strong>{" "}
                    All analytics and diagnostic telemetry inside secondary
                    components have been deactivated:

                    <ul className="mt-3 list-disc space-y-3 pl-5">
                      <li>
                        <strong className="text-ink">
                          Google ML Kit Telemetry Opt-Out:
                        </strong>{" "}
                        Omni Browser opts out of ML Kit telemetry tracking. No
                        translation strings, scanner logs, or device details
                        are sent to Google.
                      </li>

                      <li>
                        <strong className="text-ink">
                          No Third-Party SDKs:
                        </strong>{" "}
                        The app contains no advertisement SDKs, crash reporters
                        (like Firebase Crashlytics), or telemetry tracking
                        code.
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-ink">
                  1.2 Permissions &amp; Usage Disclosure
                </h3>

                <p className="mt-4">
                  Omni Browser requests permissions only when necessary to
                  perform core browser and utility features. All data processed
                  via these permissions remains on-device:
                </p>

                <div className="mt-6 overflow-x-auto rounded-xl border border-base-border">
                  <table className="w-full min-w-225 border-collapse text-left text-sm">
                    <thead>
                      <tr className="bg-base-raised">
                        <th className="border border-base-border px-5 py-4 font-semibold text-ink">
                          Permission
                        </th>

                        <th className="border border-base-border px-5 py-4 font-semibold text-ink">
                          Purpose
                        </th>

                        <th className="border border-base-border px-5 py-4 font-semibold text-ink">
                          Data Safety Context
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      <PermissionRow
                        permission="INTERNET"
                        purpose="Core web browsing, loading websites, and downloading web resources."
                        safety="No URL requests or browsing traffic are logged or shared by RebelRoot."
                      />

                      <PermissionRow
                        permission="USE_BIOMETRIC"
                        purpose="Authenticating user access to the secure Locker feature."
                        safety="Handled via Android's Secure Biometric API. Biometric credentials are stored securely in the device's hardware (TEE/StrongBox) and are never accessible to the app."
                      />

                      <PermissionRow
                        permission="CAMERA"
                        purpose="Allowing websites to access the camera for in-browser video calls (WebRTC), scanning QR codes, or document scanning."
                        safety="Processing is local. Video frames are only streamed to web destinations explicitly approved by the user."
                      />

                      <PermissionRow
                        permission="RECORD_AUDIO"
                        purpose="Allowing websites to capture audio for voice calls (WebRTC) and audio recordings."
                        safety="Streams are peer-to-peer or sent directly to websites explicitly authorized by the user."
                      />

                      <PermissionRow
                        permission="ACCESS_FINE_LOCATION & ACCESS_COARSE_LOCATION"
                        purpose="Sharing your device location with websites that request it (e.g., maps, local delivery)."
                        safety="Geolocation coordinates are only accessed after explicit user prompt approvals and are sent directly to the requesting site. RebelRoot never collects location history."
                      />

                      <PermissionRow
                        permission="READ / WRITE STORAGE & READ_MEDIA_..."
                        purpose="Accessing the device storage to save file downloads or import/export files from/into the secure Locker."
                        safety="Uses MediaStore and Scoped Storage APIs to restrict permission scopes to media folders only."
                      />

                      <PermissionRow
                        permission="POST_NOTIFICATIONS"
                        purpose="Displaying progress bars and completion statuses for active file downloads."
                        safety="Local system notifications only."
                      />
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-ink">
                  1.3 Third-Party Services &amp; Libraries
                </h3>

                <p className="mt-4">
                  Omni Browser incorporates open-source and Google libraries
                  for local utilities:
                </p>

                <ul className="mt-4 list-disc space-y-3 pl-5">
                  <li>
                    <strong className="text-ink">
                      Mozilla GeckoView Engine:
                    </strong>{" "}
                    Renders web pages. It operates locally and adheres to
                    standard Web API protocols.
                  </li>

                  <li>
                    <strong className="text-ink">
                      WireGuard VPN:
                    </strong>{" "}
                    Operates locally to encrypt external web traffic. Omni
                    Browser does not monitor, route, or decrypt network traffic
                    passing through the tunnel.
                  </li>

                  <li>
                    <strong className="text-ink">
                      Google Play Services (Code &amp; Document Scanners):
                    </strong>{" "}
                    Utilizes zero-permission clients where Google Play
                    Services handles OCR and scanning operations locally
                    on-device.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-ink">
                  1.4 Data Deletion
                </h3>

                <p className="mt-4">
                  All local data can be incinerated instantly using the
                  built-in <strong className="text-ink">Fire Button</strong>{" "}
                  (data incinerator), which executes clean database and memory
                  wipes. Uninstalling the application completely deletes all
                  browser records, encrypted lockers, and database files.
                </p>
              </div>
            </div>
          </PolicySection>

          {/* 2. Data Safety */}
          <PolicySection title="2. Data Safety &amp; User Satisfaction Commitment">
            <p>
              RebelRoot is committed to providing a secure browsing environment
              that prioritizes your peace of mind and satisfaction. We back
              this commitment with strict data safety protocols:
            </p>

            <div className="mt-8 space-y-8">
              <div>
                <h3 className="text-lg font-medium text-ink">
                  2.1 Zero Data Harvesting
                </h3>

                <p className="mt-4">
                  We guarantee that Omni Browser does not collect, harvest, or
                  share any of your personal details, browsing history, search
                  queries, or downloaded files. Everything remains strictly on
                  your device.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-ink">
                  2.2 Encryption by Default
                </h3>

                <p className="mt-4">
                  We ensure that all web traffic generated by the browser
                  utilizes industry-standard HTTPS protocols to secure your
                  data in transit. In addition, the application enforces TLS
                  security for WebExtension APIs to prevent man-in-the-middle
                  interceptions.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-ink">
                  2.3 Complete Data Sovereignty
                </h3>

                <p className="mt-4">
                  We empower you with full control over your digital footprint.
                  You can instantly incinerate all browsing sessions, cookies,
                  history, and secure locker databases with a single tap of the
                  built-in <strong className="text-ink">Fire Button</strong>,
                  or completely purge all traces by uninstalling the app.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-ink">
                  2.4 No Device Tracking
                </h3>

                <p className="mt-4">
                  We promise that Omni Browser never accesses, monitors, or
                  transmits hardware identifiers (such as IMEI, MAC address, or
                  Android ID) and contains no advertising tracking SDKs.
                </p>
              </div>
            </div>
          </PolicySection>

          {/* 3. Technical Details */}
          <PolicySection title="3. Data Security Implementation Details (Technical)">
            <p>
              To back up the Data Safety declarations, Omni Browser
              incorporates the following security controls at the code level:
            </p>

            <ol className="mt-6 list-decimal space-y-5 pl-5">
              <li>
                <strong className="text-ink">
                  SQLCipher Database Encryption:
                </strong>
                <br />
                All SQLite databases (history, settings, bookmarks) are
                encrypted using <strong className="text-ink">SQLCipher (AES-256)</strong>{" "}
                via the Android Room library. The encryption key is derived
                securely and stored using Android Keystore.
              </li>

              <li>
                <strong className="text-ink">
                  EncryptedFile Storage:
                </strong>
                <br />
                Imported locker files are encrypted on-disk using AndroidX
                Security-Crypto wrapper around AES-256 GCM encryption.
              </li>

              <li>
                <strong className="text-ink">
                  No Cleartext Traffic:
                </strong>
                <br />
                Cleartext HTTP requests from the Android Application layers
                are blocked (HTTPS enforcement).
              </li>

              <li>
                <strong className="text-ink">Log Stripping:</strong>
                <br />
                Production release builds run aggressive R8 optimizations to
                strip out all debug and informative log outputs, preventing
                sensitive browser variables from being dumped into the system
                logcat.
              </li>
            </ol>
          </PolicySection>
        </div>
      </div>
    </section>
  );
}

function PermissionRow({
  permission,
  purpose,
  safety,
}: {
  permission: string;
  purpose: string;
  safety: string;
}) {
  return (
    <tr>
      <td className="border border-base-border px-5 py-4 align-top font-semibold text-ink">
        {permission}
      </td>

      <td className="border border-base-border px-5 py-4 align-top text-ink-muted">
        {purpose}
      </td>

      <td className="border border-base-border px-5 py-4 align-top text-ink-muted">
        {safety}
      </td>
    </tr>
  );
}

function PolicySection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-base-border pt-8">
      {title && (
        <h2 className="text-xl font-medium text-ink sm:text-2xl">
          {title}
        </h2>
      )}

      <div
        className={`${
          title ? "mt-4" : ""
        } text-sm leading-relaxed text-ink-muted sm:text-base`}
      >
        {children}
      </div>
    </section>

  );
}