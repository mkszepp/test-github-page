import '@glint/environment-ember-loose';

import type EmberTruthRegistry from 'ember-truth-helpers/template-registry';
import type { EmbroiderUtilRegistry } from '@embroider/util';
import type EmberElementHelperRegistry from 'ember-element-helper/template-registry';

export interface StyleHelperRegistry {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export interface ReadonlyRegistry {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry
    extends EmberTruthRegistry /* other addon registries */ {
    // local entries
  }

  export default interface Registry
    extends EmbroiderUtilRegistry /* other registries here */ {
    // ...
  }

  export default interface Registry
    extends EmberElementHelperRegistry /* other registries here */ {
    // ...
  }

  export default interface Registry
    extends StyleHelperRegistry /* other registries here */ {
    // ...
  }

  export default interface Registry
    extends ReadonlyRegistry /* other registries here */ {
    // ...
  }
}
