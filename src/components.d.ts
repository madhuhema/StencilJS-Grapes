/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { MatchResults, } from "@stencil/router";
import { IAppTabsContentData, IAppTabsHeaderData, } from "./components/app-tabs/app-tabs-interfaces";
export namespace Components {
    interface AppBsButton {
        "block": boolean;
        "buttonType": string;
        "disabled": boolean;
        "href": string;
        "outline": boolean;
        "size": string;
        "theme": string;
        "value": string;
    }
    interface AppBsGird {
    }
    interface AppChip {
        "closeable": boolean;
        "id": string;
        "image": string;
        "text": string;
    }
    interface AppHome {
    }
    interface AppProfile {
        "match": MatchResults;
    }
    interface AppRoot {
    }
    interface AppTabs {
    }
    interface AppTabsContent {
        "getChild": () => Promise<IAppTabsContentData>;
        "name": string;
    }
    interface AppTabsHeader {
        "getChild": () => Promise<IAppTabsHeaderData>;
        "name": string;
    }
    interface TagTest {
    }
}
declare global {
    interface HTMLAppBsButtonElement extends Components.AppBsButton, HTMLStencilElement {
    }
    var HTMLAppBsButtonElement: {
        prototype: HTMLAppBsButtonElement;
        new (): HTMLAppBsButtonElement;
    };
    interface HTMLAppBsGirdElement extends Components.AppBsGird, HTMLStencilElement {
    }
    var HTMLAppBsGirdElement: {
        prototype: HTMLAppBsGirdElement;
        new (): HTMLAppBsGirdElement;
    };
    interface HTMLAppChipElement extends Components.AppChip, HTMLStencilElement {
    }
    var HTMLAppChipElement: {
        prototype: HTMLAppChipElement;
        new (): HTMLAppChipElement;
    };
    interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {
    }
    var HTMLAppHomeElement: {
        prototype: HTMLAppHomeElement;
        new (): HTMLAppHomeElement;
    };
    interface HTMLAppProfileElement extends Components.AppProfile, HTMLStencilElement {
    }
    var HTMLAppProfileElement: {
        prototype: HTMLAppProfileElement;
        new (): HTMLAppProfileElement;
    };
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLAppTabsElement extends Components.AppTabs, HTMLStencilElement {
    }
    var HTMLAppTabsElement: {
        prototype: HTMLAppTabsElement;
        new (): HTMLAppTabsElement;
    };
    interface HTMLAppTabsContentElement extends Components.AppTabsContent, HTMLStencilElement {
    }
    var HTMLAppTabsContentElement: {
        prototype: HTMLAppTabsContentElement;
        new (): HTMLAppTabsContentElement;
    };
    interface HTMLAppTabsHeaderElement extends Components.AppTabsHeader, HTMLStencilElement {
    }
    var HTMLAppTabsHeaderElement: {
        prototype: HTMLAppTabsHeaderElement;
        new (): HTMLAppTabsHeaderElement;
    };
    interface HTMLTagTestElement extends Components.TagTest, HTMLStencilElement {
    }
    var HTMLTagTestElement: {
        prototype: HTMLTagTestElement;
        new (): HTMLTagTestElement;
    };
    interface HTMLElementTagNameMap {
        "app-bs-button": HTMLAppBsButtonElement;
        "app-bs-gird": HTMLAppBsGirdElement;
        "app-chip": HTMLAppChipElement;
        "app-home": HTMLAppHomeElement;
        "app-profile": HTMLAppProfileElement;
        "app-root": HTMLAppRootElement;
        "app-tabs": HTMLAppTabsElement;
        "app-tabs-content": HTMLAppTabsContentElement;
        "app-tabs-header": HTMLAppTabsHeaderElement;
        "tag-test": HTMLTagTestElement;
    }
}
declare namespace LocalJSX {
    interface AppBsButton {
        "block"?: boolean;
        "buttonType"?: string;
        "disabled"?: boolean;
        "href"?: string;
        "outline"?: boolean;
        "size"?: string;
        "theme"?: string;
        "value"?: string;
    }
    interface AppBsGird {
    }
    interface AppChip {
        "closeable"?: boolean;
        "id"?: string;
        "image"?: string;
        "onApp-chip-close"?: (event: CustomEvent<any>) => void;
        "text"?: string;
    }
    interface AppHome {
    }
    interface AppProfile {
        "match"?: MatchResults;
    }
    interface AppRoot {
    }
    interface AppTabs {
    }
    interface AppTabsContent {
        "name"?: string;
    }
    interface AppTabsHeader {
        "name"?: string;
        "onOnSelect"?: (event: CustomEvent<any>) => void;
    }
    interface TagTest {
    }
    interface IntrinsicElements {
        "app-bs-button": AppBsButton;
        "app-bs-gird": AppBsGird;
        "app-chip": AppChip;
        "app-home": AppHome;
        "app-profile": AppProfile;
        "app-root": AppRoot;
        "app-tabs": AppTabs;
        "app-tabs-content": AppTabsContent;
        "app-tabs-header": AppTabsHeader;
        "tag-test": TagTest;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-bs-button": LocalJSX.AppBsButton & JSXBase.HTMLAttributes<HTMLAppBsButtonElement>;
            "app-bs-gird": LocalJSX.AppBsGird & JSXBase.HTMLAttributes<HTMLAppBsGirdElement>;
            "app-chip": LocalJSX.AppChip & JSXBase.HTMLAttributes<HTMLAppChipElement>;
            "app-home": LocalJSX.AppHome & JSXBase.HTMLAttributes<HTMLAppHomeElement>;
            "app-profile": LocalJSX.AppProfile & JSXBase.HTMLAttributes<HTMLAppProfileElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "app-tabs": LocalJSX.AppTabs & JSXBase.HTMLAttributes<HTMLAppTabsElement>;
            "app-tabs-content": LocalJSX.AppTabsContent & JSXBase.HTMLAttributes<HTMLAppTabsContentElement>;
            "app-tabs-header": LocalJSX.AppTabsHeader & JSXBase.HTMLAttributes<HTMLAppTabsHeaderElement>;
            "tag-test": LocalJSX.TagTest & JSXBase.HTMLAttributes<HTMLTagTestElement>;
        }
    }
}