import EventEmitter from '../event-emitter';

class SoftKeyStore extends EventEmitter {
  start() {
    this.currentKeys = {};
    this.DOMKeyMap = new Map();
  }

  register(keys, dom) {
    let instance = this.DOMKeyMap.get(dom);
    const self = this;
    if (!instance) {
      instance = {
        start() {
          dom.addEventListener('focus', this, true);
          this.update(keys);
        },

        stop() {
          dom.removeEventListener('focus', this, true);
        },

        handleEvent() {
          console.info(`----------softkey store--------${dom}`);
          this.check();
        },

        check() {
          const curr = document.activeElement;
          if (curr === dom || dom.contains(curr)) {
            const result = self.recount();
            self.store(result);
          }
        },

        update(k) {
          this.keys = k;
          this.check();
        }
      };
      this.DOMKeyMap.set(dom, instance);
      instance.start();
    } else {
      instance.update(keys);
    }
  }

  store(keys) {
    this.currentKeys = keys;
    console.info('softkey store ---------- emit change');
    this.emit('change');
  }

  recount() {
    const result = {};
    let curr = document.activeElement;
    while (curr !== document.body) {
      const instance = this.DOMKeyMap.get(curr);
      if (instance) {
        const { keys } = instance;
        for (const key in keys) {
          if (!(key in result)) {
            result[key] = keys[key];
          }
        }
      }
      curr = curr.parentNode;
    }
    return result;
  }

  unregister(dom) {
    const instance = this.DOMKeyMap.get(dom);
    if (!instance) {
      return;
    }
    instance.stop();
    this.DOMKeyMap.delete(dom);
    this.store(this.recount());
  }
}

const store = new SoftKeyStore();
window.softkeystore = store;
store.start();

export default store;
