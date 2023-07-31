import Link from "next/link";
import { registerLicense } from "@syncfusion/ej2-base";

registerLicense(
  "ORg4AjUWIQA/Gnt2VVhkQlFacltJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxQdkRiUX9WdHxXQ2FcVkQ="
);

export default function page() {
  return (
    <div className="relative left-60">
      <Link href="/test">main</Link>
    </div>
  );
}
