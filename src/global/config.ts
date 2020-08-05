export const config = {
  autorender: true,
  forceClass: false,
  components: '',
  style: '',
  // plugins: [],
  plugins: ["gjs-blocks-basic"],
  pluginsOpts: {
    "gjs-blocks-basic": {
      
    }
    // 'gjs-preset-webpage': {
    //   navbarOpts: false,
    //   countdownOpts: false,
    //   formsOpts: false,
    //   blocksBasicOpts: {
    //     blocks: ['link-block', 'quote', 'image', 'video', 'text', 'column1', 'column2', 'column3'],
    //     flexGrid: false,
    //     stylePrefix: 'lala-'
    //   }
    // }
  },
  // assetManager: {
  //   uploadText: 'Add image through link or upload image',
  //   modalTitle: 'Select Image',
  //   openAssetsOnDrop: 1,
  //   inputPlaceholder: 'http://url/to/the/image.jpg',
  //   addBtnText: 'Add image',
  //   uploadFile: (e) => {
  //     const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
  //   },
  //   handleAdd: (textFromInput) => {
  //     this._editor.AssetManager.add(textFromInput);
  //   }
  // },
  canvas: {
    styles: [
      'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css',
      'https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css',
    ],
    scripts: [
      'https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js'
    ],
  },
};
