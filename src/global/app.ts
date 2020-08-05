import * as grapesjs from 'grapesjs';
import 'grapesjs-blocks-basic';
import * as IGrape from '../grape/grapes';
import {config} from './config';
import {Blocks} from './blocks';

export default async () => {
  /**
   * The code to be executed should be placed within a default function that is
   * exported by the global script. Ensure all of the code in the global script
   * is wrapped in the function() that is exported.
   */
  const main = new Index(window, document, '#grapes');
  debugger;
  main.init();
};

class Index {
  private _window: Window;
  private _document: Document;
  private _grape: any = grapesjs.default;
  private _editor!: IGrape.Editor;
  private _blockManager!: Blocks;
  private _config: IGrape.EditorConfig = config;

  constructor(
    window: Window,
    document: Document,
    container: string,
    opts: IGrape.EditorConfig | object = {}
  ) {
    this._window = window;
    this._document = document;
    this._config.canvas.scripts.push("");
    this._config = {...this._config, ...{container}, ...opts};
  }

  init() {
    debugger;
    this._editor = this._grape.init(this._config);
    this._blockManager = new Blocks(this._editor.BlockManager);
    this._blockManager.init();
  }

  get document() {
    return this._document;
  }
}

// referrals:

// https://github.com/niiknow/grapesjs-components-farmer
