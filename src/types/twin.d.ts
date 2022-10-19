// import styledImport, { css as cssImport, CSSProp } from "styled-components";
// import "twin.macro";

// declare module "twin.macro" {
//   // The styled and css imports
//   const styled: typeof styledImport;
//   const css: typeof cssImport;
// }

// declare module "react" {
//   // The css prop
//   type HTMLAttributes<T> = {
//     css?: CSSProp;
//     tw?: string;
//   } & DOMAttributes<T>;

//   // The inline svg css prop
//   type SVGProps<T> = {
//     css?: CSSProp;
//     tw?: string;
//   } & SVGProps<SVGSVGElement>;
// }

// // The 'as' prop on styled components
// declare global {
//   namespace JSX {
//     type IntrinsicAttributes<T> = {
//       as?: string | Element;
//     } & DOMAttributes<T>;
//   }
// }
