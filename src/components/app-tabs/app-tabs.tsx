import { Component, Element, Listen, h } from '@stencil/core';
import { IAppTabsContentData, IAppTabsHeaderData } from './app-tabs-interfaces';

interface ITabsGroup {
    header: IAppTabsHeaderData;
    content: IAppTabsContentData;
}

@Component({
  tag: 'app-tabs',
  styleUrl: 'app-tabs.scss',
  shadow: true,
})
export class AppTabs {

    tabsHeader: IAppTabsHeaderData[];
    tabsContent: IAppTabsContentData[];
    tabsGroup: ITabsGroup[];

    @Element() host: HTMLElement;

    componentDidLoad() {
        this.createGroup();

        const [group] = this.tabsGroup;
        this.selectGroup(group);
    }

    @Listen('onSelect')
    onSelectedTab(event: CustomEvent) {
        const group = this.tabsGroup.find(group => group.header.id === event.detail.id);
        this.selectGroup(group);    
    }

    createGroup() {
      debugger;
        const tabsHeaderEl = Array.from(this.host.querySelectorAll('app-tabs-header')) as any[];
        this.tabsHeader = tabsHeaderEl.map(el => el.getChild());

        const tabsContentEl = Array.from(this.host.querySelectorAll('app-tabs-content')) as any[];
        this.tabsContent = tabsContentEl.map(el => el.getChild());

        this.tabsGroup = this.tabsHeader.map(header => {
            const content = this.tabsContent.find(content => content.name === header.name);

            return {
                header: header,
                content: content
            };
        });
    }

    selectGroup(group: ITabsGroup) {
        this.tabsGroup.forEach(_ => { 
            _.header.unselect();
            _.content.unselect();
        });

        group.header.select();
        group.content.select();
    }

    render() {
        return [
            <div class="app-tabs-header">
                <slot name="header" />
            </div>,
            <div class="app-tabs-content"> 
                <slot name="content" />
            </div>
        ];
    }
}
