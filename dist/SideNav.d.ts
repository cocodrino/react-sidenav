import * as React from 'react';
import { OnSelectionListener, ViewMode, ISideNavActionContext, ChildrenToggleMode, ISideNavContext } from './types';
export declare const SideNavActionContext: React.Context<ISideNavActionContext>;
export declare const SideNavContext: React.Context<ISideNavContext>;
interface ISideNavProp {
    onSelection?: OnSelectionListener;
    mode?: ViewMode;
    defaultSelectedPath?: string;
    childrenToggleMode?: ChildrenToggleMode;
    childrenToggleIndicator?: React.ComponentType;
    collapseAutomatically?: boolean;
}
export declare const SideNav: React.FC<ISideNavProp>;
export {};
