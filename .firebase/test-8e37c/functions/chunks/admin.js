import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";
import pkg from "firebase-admin";
const FB_PROJECT_ID = "test-8e37c";
const FB_CLIENT_EMAIL = "firebase-adminsdk-f9y2c@test-8e37c.iam.gserviceaccount.com";
const FB_PRIVATE_KEY = "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQC6S/Tvu7ilhDdS\nH9I4F+BOdyjBmva4x2S+VHpmva6peWKnd0hwy2BWNdQkk4U31IgDdcwFM3l3I3h4\nvP5BoJh4W15gZ9ZmaoJSiWfBJBl/TjwnGJJYI0w9WTBGCoje0eaFJc71xfgeBaUj\n9GMZToHAcqBXnFHqbjDiVpJ7R/cBf6mdA38wYP6CB78PciZg6oGlO5eGlQ9xgYkn\nzYtLMFmTKVPFzSIDxOg1njFu8rMmnWM+aWzavuN4EjkwciR+cLpkma7ShjjvGk3D\nqn39MpWr+/sWq2wTahbCagy+ZiwryDIMfr9bO7Ipe/thFTtwZDXZyX7hI/pKZ6BL\nXyyt0Hu3AgMBAAECggEAD11lYaz/W8itprHQ15HXN6bUmdyAiG6K4gxl8077S/yi\nxNdt25OtKd8S/0NFePx9N/UsCFUdqamnbXnU6dpnc4HBpRIwriNkWo9SRdfcMdI6\nMX/xeKB3UMCoM8FPAZBD7WutXTrggwVfKznO6eQ+MlOh4tKV36UKlhhNc3/Uy5mJ\n+ogNLKJApE1m35LRltVa3i6n28DzWwFLs9Oq2wOvB3IhnegvFN1NcdEsxjbIV8Gb\npebcVwDOkDqvL4AUia/HR+MRcr80IKXMWUCP9UQWeK+5d46JfPaAbF8b+Fii8UoP\n1FmK/FmE8u3HE+aNS0wI4AQ9LsOluuNWSIWN82PFoQKBgQD7Xfl2IZm3uyTWc2rw\nASPEYccDjSZ6fjD8GRUT/8vYGeSqrjxZYrv8FZUrRuvFefSJB4HIUNl1Q6AWClph\njt3tjvDdzzkAZ2v5WHM+jh11wVx8ha33JTRp43TOVWYO9uty1SdmDM1BBTNdTzON\nmEWX3bajzsEgLDhml7KHSMj+FwKBgQC9uvXvq7dXhE0UBqGS01u3ErX1n5xkP5+k\nzcUGK1+8ZNbzfv9+Pp0wx1oahv5GNUknaATYhmZ3IYNRZ6kzZHK2v4ZaQNlxNrQF\ncrICHbRSM7mbebopNt0U/JjjJ0XJLIK0usr3rrHS9nM6LLzUfa6Q6QldskHNK6vt\n9/psf+eTYQKBgQD5gMbrveBRob2n63pa7hatiAw9dy6ZaYZ/xPnKFx4jy1fRHw8h\n/kHvrxCYm1XNdwcFuODWj4G5xr0xA2fA7ElW0oo88MJ4py9imawSjIeraZm+tAYA\nifpjnHVFlTivY+JC4lawEcbuYhYg6UuXoWx6mIUARWom4B2/n5WCePmgUwKBgQC3\nlNDlUDz91IkUSHpMbHCBCvy/puoXYiyhtWzf1FY1H0mRoB+tUv6cNTitFFOzMVoQ\nZCjULe+1c9rxiKEClj4dL+LbL4Z2clzsLJerTnytUVlV5AnKWUjARs3UdaqjxorO\nPzOnRwTPQSIrdyBbZyTjGGm0nIfo80nP37MTCwvS4QKBgQCMhYvp0rb8I/tRNozg\nrMdsDryve3ySr/HrWBAYJqolNjg6G66qmf+cEUwqWZYT494+8kTn7axtcqsG1zoJ\nDBvxgZe+P+uXok2SME4HpdtnjxZ9cIjRtr9yljO5Il52nIg0iuMjMoDyNypVvg1Q\neN/GBrDki8BxVtXCsB2K18V0wg==\n-----END PRIVATE KEY-----\n";
try {
  pkg.initializeApp({
    credential: pkg.credential.cert({
      projectId: FB_PROJECT_ID,
      clientEmail: FB_CLIENT_EMAIL,
      privateKey: FB_PRIVATE_KEY
    })
  });
} catch (err) {
  if (!/already exists/u.test(err.message)) {
    console.error("Firebase Admin Error: ", err.stack);
  }
}
const adminDB = getFirestore();
const adminAuth = getAuth();
export {
  adminAuth as a,
  adminDB as b
};
