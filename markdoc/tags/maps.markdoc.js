import { Maps } from '../../components/Maps';

export default {
  render: Maps,
  attributes: {
    src: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    width: {
      type: String,
      default: '70%'
    }
  }
};