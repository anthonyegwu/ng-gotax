import {
  NgModule,
  ModuleWithProviders,
  Optional,
  SkipSelf,
} from '@angular/core';
import { GotaxComponent } from './gotax.component';
import { AuthenticationService } from './authentication.service';
import { OrganizationService } from './organization.service';
import { ServiceService } from './service.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [GotaxComponent],
  imports: [HttpClientModule],
  exports: [GotaxComponent],
  providers: [AuthenticationService, OrganizationService, ServiceService],
})
export class GotaxModule {
  constructor(@Optional() @SkipSelf() parentModule?: GotaxModule) {
    if (parentModule) {
      throw new Error('Module already loaded, Please load only in root');
    }
  }

  static forRoot(config: GotaxConfig): ModuleWithProviders {
    return {
      ngModule: GotaxModule,
      providers: [{ provide: GotaxConfig, useValue: config }],
    };
  }
}

export class GotaxConfig {
  userServiceUrl = 'http://3.130.118.251:8092/v1';
  organizationServiceUrl = '';
  servieServiceUrl = '';
}
