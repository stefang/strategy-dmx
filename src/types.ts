import {
  HostConfig,
  DeviceConfig,
  Iotes,
  ClientConfig,
} from '@iotes/core'

export type DeviceTypes = 'DMX_FIXTURE'

export type StrategyConfig = {}

interface GenericDevice {
  name: string
  type: string
}

// Device
export type Device<StrategyConfig, DeviceType> = (
  host: { config: HostConfig<StrategyConfig>; connection: any },
  client: ClientConfig,
  iotes: Iotes,
) => (device: DeviceConfig<DeviceType>) => Promise<DeviceConfig<DeviceType>>

export namespace DmxFixture {
  export type Type = 'DMX_FIXTURE'
  export interface Device extends GenericDevice {
    type: Type
  }
}
