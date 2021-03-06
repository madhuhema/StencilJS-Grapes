export interface GrapesEditor {
  init: (config?: EditorConfig | object) => Editor;
  [prop: string]: any;
}
export interface Editor {
  $: Function;
  editor: object;
  DomComponents: object;
  LayerManager: object;
  CssComposer: object;
  StorageManager: object;
  AssetManager: AssetManager;
  BlockManager: BlockManager;
  TraitManager: object;
  SelectorManager: SelectorManager;
  CodeManager: object;
  Commands: Array<any>;
  Keymaps: object;
  Modal: Modal;
  Panels: Array<any>;
  StyleManager: object;
  Canvas: Canvas;
  UndoManager: object;
  DeviceManager: object;
  RichTextEditor: object;
  Parser: object;
  Utils: object;
  Config: EditorConfig | object;

  getConfig(prop: string): EditorConfig | object;
  getHtml(opts: any): string;
  getCss(opts: any): string;
  getJs(opts: any): string;
  getComponents(): Array<object>;
  getWrapper(): object;
  setComponents(components: Array<object>): Editor;
  addComponents(components: Array<object>): Array<object>;
  getStyle(): object;
  setStyle(style: Array<object> | object | string): Editor;
  getSelected(): Array<Selection>;
  getSelectedAll(): Array<Selection>;
  getSelectedToStyle(): object | undefined;
  select(el: object | HTMLElement): Editor;
  selectAdd(
    el: object | HTMLElement | Array<object> | Array<HTMLElement>
  ): Editor;
  selectRemove(
    el: object | HTMLElement | Array<object> | Array<HTMLElement>
  ): Editor;
  selectToggle(
    el: object | HTMLElement | Array<object> | Array<HTMLElement>
  ): Editor;
  setDevice(name: string): Editor;
  getDevice(): object;
  runCommand(id: string, options: object): any;
  stopCommand(id: string, options: object): any;
  store(clb: Function): object;
  load(clb: Function): object;
  getContainer(): HTMLElement;
  getDirtyCount(): number;
  refresh(): void;
  setCustomRte(obj: object): void;
  setCustomParserCss(parser: Function | null): Editor;
  log(msg: any, opts?: LogOptions): Editor;
  on(event: GrapesEvent, callback: Function): Editor;
  on(event: string, callback: Function): Editor;
  once(event: GrapesEvent, callback: Function): Editor;
  once(event: string, callback: Function): Editor;
  off(event: GrapesEvent, callback: Function): Editor;
  off(event: string, callback: Function): Editor;
  trigger(event: GrapesEvent, ...params: any): Editor;
  trigger(event: string, ...params: any): Editor;
  destroy(): void;
  getEl(): HTMLElement;
  getany(): object;
  render(): HTMLElement;
}

type GrapesEvent =
  | ComponentEvent
  | BlockEvent
  | AssetEvent
  | KeymapEvent
  | StyleManagerEvent
  | GrapeStorageEvent
  | CanvasEvent
  | SelectorEvent
  | RichTextEditorEvent
  | ModalEvent
  | CommandEvent
  | GeneralEvent;

type ComponentEvent =
  | 'component:create'
  | 'component:mount'
  | 'component:add'
  | 'component:remove'
  | 'component:clone'
  | 'component:update'
  | 'component:update:{propertyName}'
  | 'component:styleUpdate'
  | 'component:styleUpdate:{propertyName}'
  | 'component:selected'
  | 'component:deselected'
  | 'component:toggled';

type BlockEvent =
  | 'block:add'
  | 'block:remove'
  | 'block:drag:start'
  | 'block:drag'
  | 'block:drag:stop';

type AssetEvent =
  | 'asset:add'
  | 'asset:remove'
  | 'asset:upload:start'
  | 'asset:upload:end'
  | 'asset:upload:error'
  | 'asset:upload:response';

type KeymapEvent =
  | 'keymap:add'
  | 'keymap:remove'
  | 'keymap:emit'
  | 'keymap:emit:{keymapId}';

type StyleManagerEvent =
  | 'styleManager:update:target'
  | 'styleManager:change'
  | 'styleManager:change:{propertyName}';

type GrapeStorageEvent =
  | 'storage:start'
  | 'storage:start:store'
  | 'storage:start:load'
  | 'storage:load'
  | 'storage:store'
  | 'storage:end'
  | 'storage:end:store'
  | 'storage:end:load'
  | 'storage:error'
  | 'storage:error:store'
  | 'storage:error:load';

type CanvasEvent =
  | 'canvas:dragenter'
  | 'canvas:dragover'
  | 'canvas:drop'
  | 'canvas:dragend'
  | 'canvas:dragdata';

type SelectorEvent = 'selector:add';

type RichTextEditorEvent = 'rte:enable' | 'rte:disable';

type ModalEvent = 'modal:open' | 'modal:close';

type CommandEvent =
  | 'run:{commandName}'
  | 'stop:{commandName}'
  | 'run:{commandName}:before'
  | 'stop:{commandName}:before'
  | 'abort:{commandName}';

type GeneralEvent = 'canvasScroll' | 'undo' | 'redo' | 'load';

export interface Canvas {
  getConfig(): CanvasConfig | object;
  getElement(): HTMLElement;
  getFrameEl(): HTMLIFrameElement;
  getWindow(): Window;
  getDocument(): HTMLDocument;
  getBody(): HTMLBodyElement;
  getWrapperEl(): HTMLElement;
  setCustomBadgeLabel(f: Function): void;
  hasFocus(): boolean;
  scrollTo(
    el: HTMLElement | object,
    opts?: boolean | GrapesScrollIntoViewOptions
  ): void;
}

export interface GrapesScrollIntoViewOptions extends ScrollIntoViewOptions {
  force?: boolean;
}

export interface AssetManager {
  add(
    asset: string | object | Array<string> | Array<object>,
    opts?: object
  ): object;
  get(src: string): object;
  getAll(): Array<object>;
  getAllVisible(): Array<object>;
  remove(src: string): AssetManager;
  store(noStore: boolean): object;
  load(data?: object): object;
  getContainer(): HTMLElement;
  getAssetsEl(): HTMLElement;
  render(assets: Array<object>): HTMLElement;
  addType(id: string, definition: object): object;
  getType(id: string): object;
  getTypes(): Array<object>;
}

export interface BlockManager {
  getConfig(): BlockManagerConfig | object;
  onLoad(): void;
  add(id: string, opts: BlockOptions): void;
  get(id: string): object;
  getAll(): Array<object>;
  getAllVisible(): Array<object>;
  remove(id: string): object;
  getCategories(): Array<object>;
  getContainer(): HTMLElement;
  render(): HTMLElement;
}
export interface Block {
  id: string;
  options: BlockOptions;
}
export interface BlockOptions {
  label: string;
  content: string;
  category: string | object;
  attributes?: object;
}

export interface SelectorManager {
  getConfig(): SelectorManagerConfig | object;
  add(
    name: string | Array<string>,
    opts: SelectorOptions | object
  ): any | Array<object>;
  addClass(classes: Array<string> | string): Array<Record<string, any>>;
  get(name: any | Array<object>, type: string): any | Array<object>;
  getAll(): Array<any>;
}

export interface SelectorOptions {
  label?: string;
  type?: string;
}

export interface CssComposer {
  load(data: object): object;
  store(noStore: boolean): object;
  add(
    selectors: Array<Record<string, any>>,
    state: string,
    width: string,
    opts: object
  ): object;
  get(
    selectors: Array<Record<string, any>>,
    state: string,
    width: string,
    ruleProps: object
  ): object | null;
  getAll(): Array<any>;
  clear(): CssComposer;
  setRule(): Record<string, any>;
  getRule(): Record<string, any>;
}

export interface Modal {
  open(opts?: ModalOptions): Modal;
  close(): Modal;
  isOpen(): boolean;
  setTitle(title: string): Modal;
  getTitle(): string;
  setContent(content: HTMLElement | string): Modal;
  getContent(): string;
}

export interface ModalOptions {
  title?: HTMLElement | string;
  content?: HTMLElement | string;
}

/**
 * Configuration export Interface
 */

export interface EditorConfig {
  stylePrefix?: string;
  components?: string;
  style?: string;
  fromElement?: boolean;
  noticeOnUnload?: boolean;
  showOffsets?: boolean;
  showOffsetsSelected?: boolean;
  forceClass?: boolean;
  height?: string;
  width?: string;
  log?: Array<'debug' | 'info' | 'warning' | 'error'> | Array<string>;
  baseCss?: string;
  protectedCss?: string;
  canvasCss?: string;
  defaultCommand?: string;
  showToolbar?: boolean;
  allowScripts?: boolean;
  showDevices?: boolean;
  devicePreviewMode?: boolean;
  mediaCondition?: string;
  tagVarStart?: string;
  tagVarEnd?: string;
  keepEmptyTextNodes?: boolean;
  jsInHtml?: boolean;
  nativeDnD?: boolean;
  multipleSelection?: boolean;
  exportWrapper?: boolean;
  wrappesIsBody?: boolean;
  avoidInlineStyle?: boolean;
  avoidDefaults?: boolean;
  clearStyles?: boolean;
  container?: HTMLElement | string;
  undoManager?: object;
  assetManager?: AssetManagerConfig | object;
  canvas?: CanvasConfig;
  layers?: object;
  storageManager?: StorageManagerConfig | object;
  rte?: RichtTextEditorConfig | object;
  domComponents?: DomComponentsConfig | object;
  modal?: ModalConfig | object;
  codeManager?: CodeManagerConfig | object;
  panels?: PanelsConfig | object;
  commands?: CommandsConfig | object;
  cssComposer?: CssComposerConfig | object;
  selectorManager?: SelectorManagerConfig | object;
  deviceManager?: DeviceManagerConfig | object;
  styleManager?: StyleManagerConfig | object;
  blockManager?: BlockManagerConfig | object;
  traitManager?: TraitManagerConfig | object;
  textViewCode?: string;
  keepUnusedStyles?: boolean;
  multiFrames?: boolean;
}

export interface AssetManagerConfig {
  assets?: Array<object>;
  noAssets?: string;
  stylePrefix?: string;
  upload?: boolean;
  uploadName?: string;
  headers?: object;
  params?: object;
  credentials?: RequestCredentials;
  multiUpload?: boolean;
  autoAdd?: boolean;
  uploadText?: string;
  addBtnText?: string;
  customFetch?: Function;
  uploadFile?: Function;
  embedAsBase64?: boolean;
  handleAdd?: Function;
  dropzone?: boolean;
  openAssetsOnDrop?: number;
  dropzoneContent?: string;
  modalTitle?: string;
  inputPlaceholder?: string;
}

export interface CanvasConfig {
  stylePrefix?: string;
  scripts?: Array<string>;
  styles?: Array<string>;
  customBadgeLabel?: Function;
  autoscrollLimit?: number;
  notTextable?: Array<string>;
}

export interface StyleManagerConfig {
  stylePrefix?: string;
  sectors?: Array<object>;
  appendTo?: HTMLElement | string;
  textNoElement?: string;
  hideNotStylable?: boolean;
  highlightChanged?: boolean;
  highlightComputed?: boolean;
  showComputed?: boolean;
  clearProperties?: boolean;
  avoidComputed?: Array<string>;
}

export interface BlockManagerConfig {
  appendTo?: HTMLElement | string;
  blocks: Array<object>;
}

export interface RichtTextEditorConfig {
  stylePrefix?: string;
  adjustToolbar?: boolean;
  actions?: Array<string>;
}

export interface TraitManagerConfig {
  stylePrefix?: string;
  appendTo?: HTMLElement | string;
  labelContainer?: string;
  labelPlhText?: string;
  labelPlhRef?: string;
  optionsTarget?: Array<object>;
  textNoElement?: string;
}

export interface StorageManagerConfig {
  id?: string;
  autosave?: boolean;
  autoload?: boolean;
  type?: 'local' | 'remote';
  stepsBeforeSave?: number;
  storeComponents?: boolean;
  storeStyles?: boolean;
  storeHtml?: boolean;
  storeCss?: boolean;
  checkLocal?: boolean;
  params?: object;
  headers?: object;
  urlStore?: string;
  urlLoad?: string;
  contentTypeJson?: boolean;
  credentials?: RequestCredentials;

  beforeSend(jqXHR: any, settings: object): void;
  onComplete(jqXHR: any, status: any): void;
}

export interface DomComponentsConfig {
  stylePrefix?: string;
  wrapperId?: string;
  wrapperName?: string;
  wrapper?: DomComponentsWrapperConfig;
  components?: Array<object>;
  imageCompClass?: string;
  oAssetsOnCreate?: boolean;
  storeWrapper?: boolean;
  voidElements?: Array<string>;
}

export interface DomComponentsWrapperConfig {
  removable?: boolean;
  copyable?: boolean;
  draggable?: boolean;
  // TODO: Type custom blocks and components
  components?: Array<object>;
  traits?: Array<object>;
  stylable?: Array<string>;
}

export interface ModalConfig {
  stylePrefix?: string;
  title?: string;
  content?: string;
  backdrop?: boolean;
}

export interface CodeManagerConfig {
  stylePrefix?: string;
  inlineCss?: boolean;
}

export interface PanelsConfig {
  stylePrefix?: string;
  defaults?: Array<object>;
  em?: object;
  delayBtnsShow?: number;
}

export interface CommandsConfig {
  ESCAPE_KEY?: number;
  stylePrefix?: string;
  defaults?: Array<object>;
  em?: object;
  firstCentered?: boolean;
  newFixedH?: boolean;
  minComponentH?: number;
  minComponentW?: number;
}

export interface CssComposerConfig {
  stylePrefix?: string;
  staticRules?: string;
  rules?: Array<string>;
}

export interface SelectorManagerConfig {
  stylePrefix?: string;
  appendTo?: HTMLElement | string;
  selectors?: Array<string>;
  label?: string;
  statesLabel?: string;
  selectedLabel?: string;
  states?: Array<object>;
}

export interface DeviceManagerConfig {
  devices?: Array<object>;
  deviceLabel?: string;
}

/**
 * Configuration export Interface End
 */

export interface LogOptions {
  ns?: string;
  level?: 'debug' | 'info' | 'warning' | 'error';
}
