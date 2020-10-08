import {
  DeviceFactory, DeviceConfig, HostConfig, Iotes, ClientConfig,
} from '@iotes/core'
import { DeviceTypes, StrategyConfig } from './types'

export const createDeviceFactory = (
  host: { config: HostConfig<StrategyConfig>; connection: any },
  client: ClientConfig,
  iotes: Iotes,
): DeviceFactory<DeviceTypes> => {
  const { deviceSubscribe, hostDispatch } = iotes

  const createDmxFixture = async (
    device: DeviceConfig<'DMX_FIXTURE'>,
  ) => {
    const { name } = device
    let universe: any = null
    let dmx: any = null

    if ((window as any).DMX != null) {
      console.warn('External Node DMX library found')
      if (host.config.serialbindings != null) {
        dmx = new (window as any).DMX({ serialbinding: host.config.serialbindings })
      } else {
        dmx = new (window as any).DMX()
      }
      universe = dmx.addUniverse('dmx', host.config.host, host.config.port)
    } else {
      console.warn('External Node DMX library missing, check the strategy readme')
    }

    deviceSubscribe(
      (state: any) => {
        if (state[name] && state[name]?.['@@iotes_storeId']) {
          if (dmx != null && universe != null) {
            universe.update(state[name]?.payload)
          } else {
            console.log(`DMX Universe Update: ${JSON.stringify(state[name]?.payload)}`)
          }
        }
      },
      [name],
    )

    return device
  }

  return {
    DMX_FIXTURE: createDmxFixture,
  }
}
