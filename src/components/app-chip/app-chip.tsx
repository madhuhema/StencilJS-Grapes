
import { Component, Prop, Event, EventEmitter, h } from '@stencil/core';
import { isUndefined } from '../../utils/functions';

export interface AppChipCloseEvent {
    image: string;
    text: string;
    closeable: boolean;
    id: string;
}

@Component({
  tag: 'app-chip',
  styleUrl: 'app-chip.scss',
  shadow: true,
})
export class AppChip{

    @Prop()
    id: string;

    @Prop()
    image: string;

    @Prop()
    text: string;

    @Prop()
    closeable: boolean = false;

    @Event({ eventName: 'app-chip-close' })
    close: EventEmitter;

    onClose() {
        const event: AppChipCloseEvent = {
            image: this.image,
            text: this.text,
            closeable: this.closeable,
            id: this.id
        };

        this.close.emit(event);
    }

    render() {

        const hasImage = !!this.image && !isUndefined(this.image);

        const image = (() => {
            if (!hasImage) {
                return;
            }

            return (
                <div class="app-chip-image">
                    <img src={this.image} />
                </div>
            );
        })();

        const close = (() => {
            if (this.closeable) {
                return <span class="app-chip-close" onClick={this.onClose.bind(this)}>X</span>;
            }
        })();

        const chipClasses = {
            'app-chip': true,
            'app-chip-extra-pd-lt': hasImage
        };

        return (
            <div class={chipClasses}>
                {image}
                <span class="app-chip-text">{this.text}</span>
                {close}
            </div>
        );
    }
}