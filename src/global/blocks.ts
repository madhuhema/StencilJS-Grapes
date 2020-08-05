import {
  BlockManager,
  Block,
  BlockOptions,
  BlockManagerConfig,
} from '../grape/grapes';

import { Home } from '../components/app-home/index';
import { Chip } from '../components/app-chip/app-chip-grapes';
import { Tab } from '../components/app-tabs/app-tabs-grapes';

export class Blocks implements BlockManager {
  _manager: BlockManager;
  _blocks: Block[] = [Home, Chip, Tab];

  constructor(manager: BlockManager) {
    this._manager = manager;
  }

  getConfig(): object | BlockManagerConfig {
    return this._manager.getConfig();
  }

  onLoad(): void {
    this._manager.onLoad();
  }

  add(id: string, opts: BlockOptions): void {
    this._manager.add(id, opts);
  }

  get(id: string): object {
    return this._manager.get(id);
  }

  getAll(): object[] {
    return this._manager.getAll();
  }

  getAllVisible(): object[] {
    return this._manager.getAllVisible();
  }

  remove(id: string): object {
    return this._manager.remove(id);
  }

  getCategories(): object[] {
    return this._manager.getCategories();
  }

  getContainer(): HTMLElement {
    return this._manager.getContainer();
  }
  render(): HTMLElement {
    return this._manager.render();
  }

  init() {
    this._blocks.forEach(block => {
      this._manager.add(block.id, block.options);
    });
  }
}
