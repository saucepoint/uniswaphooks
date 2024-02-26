import { HookEmailType } from "@/types/hook";
import { ResouceEmailType } from "@/types/post";
import { MagicLinkData } from "@/types/index";
import { render } from "@react-email/render";

import { Hook } from "@/components/email/Hook";
import { Resource } from "@component/email/Resource";
import { MagicLink } from "@component/email/MagicLink";

export function selectMailOptions(
  type: string,
  body: HookEmailType | ResouceEmailType | MagicLinkData
) {
  let html;
  const mailOptions = {
    from: `UniswapHooks <${process.env.SENDER_EMAIL}>`,
    to: process.env.MAIN_EMAIL,
    subject: "",
    html: "",
  };
  switch (type) {
    case "hooks":
      html = render(Hook({ hook: body as HookEmailType }));
      return {
        from: mailOptions.from,
        to: mailOptions.to,
        subject: "New hook submission",
        html,
      };
    case "resources":
      html = render(Resource({ resource: body as ResouceEmailType }));
      return {
        from: mailOptions.from,
        to: mailOptions.to,
        subject: "New resource submission",
        html,
      };
    case "magic-link":
      html = render(MagicLink({ magicLink: body as MagicLinkData }));
      return {
        from: mailOptions.from,
        to: (body as MagicLinkData).email,
        subject: "Your login code for UniswapHooks",
        html,
      };
    default:
      throw new Error("Invalid submission type");
  }
}
