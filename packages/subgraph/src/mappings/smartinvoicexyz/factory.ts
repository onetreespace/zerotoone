import { log, dataSource, Address } from '@graphprotocol/graph-ts';
import { Invoice } from '../../types/schema';

import { LogNewInvoice as LogNewInvoiceEvent } from '../../types/SmartInvoiceFactory/SmartInvoiceFactory';
import {
  ERC20,
  SmartInvoiceUpdatable,
} from '../../types/templates';
import { getToken } from './helpers/token';
import { updateInvoice } from './utils';

export function handleLogNewInvoice(event: LogNewInvoiceEvent): void {
  if (
    event.params.invoiceAddress.toHexString() ==
    '0x47838384f6cc2b08d5c86a2b48cdcb9d40516189'
  ) {
    return;
  }

  let invoice = new Invoice(event.params.invoiceAddress.toHexString());

  log.info('handleLogNewInvoice {}', [event.params.invoiceAddress.toHexString()]);

  invoice.address = event.params.invoiceAddress;
  invoice.factoryAddress = event.address;
  invoice.amounts = event.params.amounts;
  invoice.invoiceType = event.params.invoiceType.toString();
  invoice.version = event.params.version;
  invoice.numMilestones = event.params.amounts.length;
  invoice.createdAt = event.block.timestamp;
  invoice.deposits = new Array<string>();
  invoice.withdraws = new Array<string>();
  invoice.releases = new Array<string>();
  invoice.disputes = new Array<string>();
  invoice.resolutions = new Array<string>();
  invoice.creationTxHash = event.transaction.hash;
  invoice.network = dataSource.network();
  invoice.projectAgreement = new Array<string>();
  invoice.verified = new Array<string>();
  invoice.milestonesAdded = new Array<string>();
  invoice.tipAmount = new Array<string>();

  log.info('invoice type check {}', [invoice.invoiceType!.toString()]);

  invoice = updateInvoice(event.params.invoiceAddress, invoice);

  if (invoice.invoiceType == 'updatable') {
    SmartInvoiceUpdatable.create(event.params.invoiceAddress);
  }

  let tokenAddress = changetype<Address>(
    Address.fromHexString(invoice.token.toHexString()),
  );
  let token = getToken(tokenAddress);
  token.save();
  ERC20.create(tokenAddress);

  invoice.tokenMetadata = tokenAddress.toHexString();
  invoice.save();
}
