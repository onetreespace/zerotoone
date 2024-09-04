import {
  createUseReadContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
  createUseWriteContract,
} from 'wagmi/codegen';

/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// AccessControl
/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const accessControlAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'DEFAULT_ADMIN_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'role', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getRoleAdmin',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'grantRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'hasRole',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'callerConfirmation', internalType: 'address', type: 'address' },
    ],
    name: 'renounceRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'revokeRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'previousAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'newAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
    ],
    name: 'RoleAdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleGranted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleRevoked',
  },
  { type: 'error', inputs: [], name: 'AccessControlBadConfirmation' },
  {
    type: 'error',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'neededRole', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'AccessControlUnauthorizedAccount',
  },
] as const;

/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Address
/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const addressAbi = [
  {
    type: 'error',
    inputs: [{ name: 'target', internalType: 'address', type: 'address' }],
    name: 'AddressEmptyCode',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'AddressInsufficientBalance',
  },
  { type: 'error', inputs: [], name: 'FailedInnerCall' },
] as const;

/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Clones
/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const clonesAbi = [
  { type: 'error', inputs: [], name: 'ERC1167FailedCreateClone' },
] as const;

/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ECDSA
/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ecdsaAbi = [
  { type: 'error', inputs: [], name: 'ECDSAInvalidSignature' },
  {
    type: 'error',
    inputs: [{ name: 'length', internalType: 'uint256', type: 'uint256' }],
    name: 'ECDSAInvalidSignatureLength',
  },
  {
    type: 'error',
    inputs: [{ name: 's', internalType: 'bytes32', type: 'bytes32' }],
    name: 'ECDSAInvalidSignatureS',
  },
] as const;

/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// EIP712
/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const eip712Abi = [
  {
    type: 'function',
    inputs: [],
    name: 'eip712Domain',
    outputs: [
      { name: 'fields', internalType: 'bytes1', type: 'bytes1' },
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'version', internalType: 'string', type: 'string' },
      { name: 'chainId', internalType: 'uint256', type: 'uint256' },
      { name: 'verifyingContract', internalType: 'address', type: 'address' },
      { name: 'salt', internalType: 'bytes32', type: 'bytes32' },
      { name: 'extensions', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    stateMutability: 'view',
  },
  { type: 'event', anonymous: false, inputs: [], name: 'EIP712DomainChanged' },
  { type: 'error', inputs: [], name: 'InvalidShortString' },
  {
    type: 'error',
    inputs: [{ name: 'str', internalType: 'string', type: 'string' }],
    name: 'StringTooLong',
  },
] as const;

/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC1155
/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc1155Abi = [
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'accounts', internalType: 'address[]', type: 'address[]' },
      { name: 'ids', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    name: 'balanceOfBatch',
    outputs: [{ name: '', internalType: 'uint256[]', type: 'uint256[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'ids', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'values', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeBatchTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'uri',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'ids',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
      {
        name: 'values',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
    ],
    name: 'TransferBatch',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: false },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'TransferSingle',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'value', internalType: 'string', type: 'string', indexed: false },
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: true },
    ],
    name: 'URI',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC1155InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC1155InvalidApprover',
  },
  {
    type: 'error',
    inputs: [
      { name: 'idsLength', internalType: 'uint256', type: 'uint256' },
      { name: 'valuesLength', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC1155InvalidArrayLength',
  },
  {
    type: 'error',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'ERC1155InvalidOperator',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC1155InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC1155InvalidSender',
  },
  {
    type: 'error',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'ERC1155MissingApprovalForAll',
  },
] as const;

/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC165
/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc165Abi = [
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
] as const;

/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC20
/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc20Abi = [
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'error',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'allowance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientAllowance',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'spender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSpender',
  },
] as const;

/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// GigManager
/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const gigManagerAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: '_escrowFactory', internalType: 'address', type: 'address' },
      { name: '_escrowResolver', internalType: 'address', type: 'address' },
      { name: '_wrappedNativeToken', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'ONE_YEAR',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_proposalId', internalType: 'uint256', type: 'uint256' },
      { name: '_details', internalType: 'string', type: 'string' },
    ],
    name: 'acceptProposal',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_proposalId', internalType: 'uint256', type: 'uint256' },
      { name: '_signatures', internalType: 'bytes[]', type: 'bytes[]' },
      { name: '_details', internalType: 'string', type: 'string' },
    ],
    name: 'acceptProposalWithSignatures',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_details', internalType: 'string', type: 'string' },
      { name: '_minPrice', internalType: 'uint256', type: 'uint256' },
      { name: '_maxPrice', internalType: 'uint256', type: 'uint256' },
      { name: '_token', internalType: 'address', type: 'address' },
      { name: '_client', internalType: 'address', type: 'address' },
      { name: '_deadline', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'createGig',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_gigId', internalType: 'uint256', type: 'uint256' },
      {
        name: '_milestoneAmounts',
        internalType: 'uint256[]',
        type: 'uint256[]',
      },
      { name: '_details', internalType: 'string', type: 'string' },
      { name: '_provider', internalType: 'address', type: 'address' },
      { name: '_deadline', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'createProposal',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_proposalId', internalType: 'uint256', type: 'uint256' },
      {
        name: '_milestoneAmounts',
        internalType: 'uint256[]',
        type: 'uint256[]',
      },
      { name: '_details', internalType: 'string', type: 'string' },
      { name: '_deadline', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'editProposal',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'eip712Domain',
    outputs: [
      { name: 'fields', internalType: 'bytes1', type: 'bytes1' },
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'version', internalType: 'string', type: 'string' },
      { name: 'chainId', internalType: 'uint256', type: 'uint256' },
      { name: 'verifyingContract', internalType: 'address', type: 'address' },
      { name: 'salt', internalType: 'bytes32', type: 'bytes32' },
      { name: 'extensions', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'escrowFactory',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'escrowNeedsVerification',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'escrowResolver',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'escrowResolverType',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'escrowType',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_proposalId', internalType: 'uint256', type: 'uint256' }],
    name: 'getEscrow',
    outputs: [{ name: 'escrow', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_gigId', internalType: 'uint256', type: 'uint256' }],
    name: 'getGig',
    outputs: [
      {
        name: 'gig',
        internalType: 'struct IGigManager.Gig',
        type: 'tuple',
        components: [
          { name: 'gigId', internalType: 'uint256', type: 'uint256' },
          { name: 'details', internalType: 'string', type: 'string' },
          { name: 'minPrice', internalType: 'uint256', type: 'uint256' },
          { name: 'maxPrice', internalType: 'uint256', type: 'uint256' },
          { name: 'token', internalType: 'address', type: 'address' },
          { name: 'isOpen', internalType: 'bool', type: 'bool' },
          { name: 'client', internalType: 'address', type: 'address' },
          { name: 'deadline', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_proposalId', internalType: 'uint256', type: 'uint256' }],
    name: 'getProposal',
    outputs: [
      {
        name: 'proposal',
        internalType: 'struct IGigManager.Proposal',
        type: 'tuple',
        components: [
          { name: 'proposalId', internalType: 'uint256', type: 'uint256' },
          { name: 'gigId', internalType: 'uint256', type: 'uint256' },
          { name: 'details', internalType: 'string', type: 'string' },
          {
            name: 'milestoneAmounts',
            internalType: 'uint256[]',
            type: 'uint256[]',
          },
          { name: 'provider', internalType: 'address', type: 'address' },
          { name: 'isAccepted', internalType: 'bool', type: 'bool' },
          { name: 'deadline', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'gigCount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'proposalCount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'wrappedNativeToken',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  { type: 'event', anonymous: false, inputs: [], name: 'EIP712DomainChanged' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'gigId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'GigCreated',
  },
  { type: 'event', anonymous: false, inputs: [], name: 'GigManagerInit' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'proposalId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'escrow',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'ProposalAccepted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'proposalId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'ProposalCreated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'proposalId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'ProposalEdited',
  },
  { type: 'error', inputs: [], name: 'ECDSAInvalidSignature' },
  {
    type: 'error',
    inputs: [{ name: 'length', internalType: 'uint256', type: 'uint256' }],
    name: 'ECDSAInvalidSignatureLength',
  },
  {
    type: 'error',
    inputs: [{ name: 's', internalType: 'bytes32', type: 'bytes32' }],
    name: 'ECDSAInvalidSignatureS',
  },
  { type: 'error', inputs: [], name: 'GigDeadlinePassed' },
  { type: 'error', inputs: [], name: 'GigNotOpen' },
  { type: 'error', inputs: [], name: 'InvalidShortString' },
  { type: 'error', inputs: [], name: 'InvalidSignatures' },
  { type: 'error', inputs: [], name: 'OnlyClient' },
  { type: 'error', inputs: [], name: 'OnlyProvider' },
  { type: 'error', inputs: [], name: 'OnlyProviderOrClient' },
  { type: 'error', inputs: [], name: 'ProposalAlreadyAccepted' },
  { type: 'error', inputs: [], name: 'ProposalDeadlinePassed' },
  {
    type: 'error',
    inputs: [{ name: 'str', internalType: 'string', type: 'string' }],
    name: 'StringTooLong',
  },
] as const;

/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IAccessControl
/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iAccessControlAbi = [
  {
    type: 'function',
    inputs: [{ name: 'role', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getRoleAdmin',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'grantRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'hasRole',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'callerConfirmation', internalType: 'address', type: 'address' },
    ],
    name: 'renounceRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'revokeRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'previousAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'newAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
    ],
    name: 'RoleAdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleGranted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleRevoked',
  },
  { type: 'error', inputs: [], name: 'AccessControlBadConfirmation' },
  {
    type: 'error',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'neededRole', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'AccessControlUnauthorizedAccount',
  },
] as const;

/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IArbitrable
/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iArbitrableAbi = [
  {
    type: 'function',
    inputs: [
      { name: '_disputeID', internalType: 'uint256', type: 'uint256' },
      { name: '_ruling', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'rule',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: '_arbitrator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: '_disputeID',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: '_ruling',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Ruling',
  },
] as const;

/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IArbitrator
/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iArbitratorAbi = [
  {
    type: 'function',
    inputs: [
      { name: '_disputeID', internalType: 'uint256', type: 'uint256' },
      { name: '_extraData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'appeal',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_disputeID', internalType: 'uint256', type: 'uint256' },
      { name: '_extraData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'appealCost',
    outputs: [{ name: 'cost', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_disputeID', internalType: 'uint256', type: 'uint256' }],
    name: 'appealPeriod',
    outputs: [
      { name: 'start', internalType: 'uint256', type: 'uint256' },
      { name: 'end', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_extraData', internalType: 'bytes', type: 'bytes' }],
    name: 'arbitrationCost',
    outputs: [{ name: 'cost', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_choices', internalType: 'uint256', type: 'uint256' },
      { name: '_extraData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'createDispute',
    outputs: [{ name: 'disputeID', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [{ name: '_disputeID', internalType: 'uint256', type: 'uint256' }],
    name: 'currentRuling',
    outputs: [{ name: 'ruling', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_disputeID', internalType: 'uint256', type: 'uint256' }],
    name: 'disputeStatus',
    outputs: [
      {
        name: 'status',
        internalType: 'enum IArbitrator.DisputeStatus',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: '_disputeID',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: '_arbitrable',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'AppealDecision',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: '_disputeID',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: '_arbitrable',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'AppealPossible',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: '_disputeID',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: '_arbitrable',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'DisputeCreation',
  },
] as const;

/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC1155
/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc1155Abi = [
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'accounts', internalType: 'address[]', type: 'address[]' },
      { name: 'ids', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    name: 'balanceOfBatch',
    outputs: [{ name: '', internalType: 'uint256[]', type: 'uint256[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'ids', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'values', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeBatchTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'ids',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
      {
        name: 'values',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
    ],
    name: 'TransferBatch',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: false },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'TransferSingle',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'value', internalType: 'string', type: 'string', indexed: false },
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: true },
    ],
    name: 'URI',
  },
] as const;

/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC1155Errors
/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc1155ErrorsAbi = [
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC1155InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC1155InvalidApprover',
  },
  {
    type: 'error',
    inputs: [
      { name: 'idsLength', internalType: 'uint256', type: 'uint256' },
      { name: 'valuesLength', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC1155InvalidArrayLength',
  },
  {
    type: 'error',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'ERC1155InvalidOperator',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC1155InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC1155InvalidSender',
  },
  {
    type: 'error',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'ERC1155MissingApprovalForAll',
  },
] as const;

/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC1155MetadataURI
/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc1155MetadataUriAbi = [
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'accounts', internalType: 'address[]', type: 'address[]' },
      { name: 'ids', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    name: 'balanceOfBatch',
    outputs: [{ name: '', internalType: 'uint256[]', type: 'uint256[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'ids', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'values', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeBatchTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'id', internalType: 'uint256', type: 'uint256' }],
    name: 'uri',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'ids',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
      {
        name: 'values',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
    ],
    name: 'TransferBatch',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: false },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'TransferSingle',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'value', internalType: 'string', type: 'string', indexed: false },
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: true },
    ],
    name: 'URI',
  },
] as const;

/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC1155Receiver
/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc1155ReceiverAbi = [
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'ids', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'values', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'onERC1155BatchReceived',
    outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'onERC1155Received',
    outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
] as const;

/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC1271
/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc1271Abi = [
  {
    type: 'function',
    inputs: [
      { name: 'hash', internalType: 'bytes32', type: 'bytes32' },
      { name: 'signature', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'isValidSignature',
    outputs: [{ name: 'magicValue', internalType: 'bytes4', type: 'bytes4' }],
    stateMutability: 'view',
  },
] as const;

/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC20Errors
/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc20ErrorsAbi = [
  {
    type: 'error',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'allowance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientAllowance',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'spender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSpender',
  },
] as const;

/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC20Metadata
/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc20MetadataAbi = [
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
] as const;

/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC20Permit
/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc20PermitAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'DOMAIN_SEPARATOR',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'nonces',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'permit',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const;

/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC20Token
/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc20TokenAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'DOMAIN_SEPARATOR',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'nonces',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'permit',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
] as const;

/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC5267
/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc5267Abi = [
  {
    type: 'function',
    inputs: [],
    name: 'eip712Domain',
    outputs: [
      { name: 'fields', internalType: 'bytes1', type: 'bytes1' },
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'version', internalType: 'string', type: 'string' },
      { name: 'chainId', internalType: 'uint256', type: 'uint256' },
      { name: 'verifyingContract', internalType: 'address', type: 'address' },
      { name: 'salt', internalType: 'bytes32', type: 'bytes32' },
      { name: 'extensions', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    stateMutability: 'view',
  },
  { type: 'event', anonymous: false, inputs: [], name: 'EIP712DomainChanged' },
] as const;

/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC721Errors
/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc721ErrorsAbi = [
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'ERC721IncorrectOwner',
  },
  {
    type: 'error',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC721InsufficientApproval',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOperator',
  },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ERC721NonexistentToken',
  },
] as const;

/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IGigManager
/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iGigManagerAbi = [
  {
    type: 'function',
    inputs: [
      { name: '_proposalId', internalType: 'uint256', type: 'uint256' },
      { name: '_details', internalType: 'string', type: 'string' },
    ],
    name: 'acceptProposal',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_proposalId', internalType: 'uint256', type: 'uint256' },
      { name: '_signatures', internalType: 'bytes[]', type: 'bytes[]' },
      { name: '_details', internalType: 'string', type: 'string' },
    ],
    name: 'acceptProposalWithSignatures',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_details', internalType: 'string', type: 'string' },
      { name: '_minPrice', internalType: 'uint256', type: 'uint256' },
      { name: '_maxPrice', internalType: 'uint256', type: 'uint256' },
      { name: '_token', internalType: 'address', type: 'address' },
      { name: '_client', internalType: 'address', type: 'address' },
      { name: '_deadline', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'createGig',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_gigId', internalType: 'uint256', type: 'uint256' },
      {
        name: '_milestoneAmounts',
        internalType: 'uint256[]',
        type: 'uint256[]',
      },
      { name: '_details', internalType: 'string', type: 'string' },
      { name: '_provider', internalType: 'address', type: 'address' },
      { name: '_deadline', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'createProposal',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_proposalId', internalType: 'uint256', type: 'uint256' },
      {
        name: '_milestoneAmounts',
        internalType: 'uint256[]',
        type: 'uint256[]',
      },
      { name: '_details', internalType: 'string', type: 'string' },
      { name: '_deadline', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'editProposal',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_proposalId', internalType: 'uint256', type: 'uint256' }],
    name: 'getEscrow',
    outputs: [{ name: 'escrow', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_gigId', internalType: 'uint256', type: 'uint256' }],
    name: 'getGig',
    outputs: [
      {
        name: 'gig',
        internalType: 'struct IGigManager.Gig',
        type: 'tuple',
        components: [
          { name: 'gigId', internalType: 'uint256', type: 'uint256' },
          { name: 'details', internalType: 'string', type: 'string' },
          { name: 'minPrice', internalType: 'uint256', type: 'uint256' },
          { name: 'maxPrice', internalType: 'uint256', type: 'uint256' },
          { name: 'token', internalType: 'address', type: 'address' },
          { name: 'isOpen', internalType: 'bool', type: 'bool' },
          { name: 'client', internalType: 'address', type: 'address' },
          { name: 'deadline', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_proposalId', internalType: 'uint256', type: 'uint256' }],
    name: 'getProposal',
    outputs: [
      {
        name: 'proposal',
        internalType: 'struct IGigManager.Proposal',
        type: 'tuple',
        components: [
          { name: 'proposalId', internalType: 'uint256', type: 'uint256' },
          { name: 'gigId', internalType: 'uint256', type: 'uint256' },
          { name: 'details', internalType: 'string', type: 'string' },
          {
            name: 'milestoneAmounts',
            internalType: 'uint256[]',
            type: 'uint256[]',
          },
          { name: 'provider', internalType: 'address', type: 'address' },
          { name: 'isAccepted', internalType: 'bool', type: 'bool' },
          { name: 'deadline', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'gigId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'GigCreated',
  },
  { type: 'event', anonymous: false, inputs: [], name: 'GigManagerInit' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'proposalId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'escrow',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'ProposalAccepted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'proposalId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'ProposalCreated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'proposalId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'ProposalEdited',
  },
  { type: 'error', inputs: [], name: 'GigDeadlinePassed' },
  { type: 'error', inputs: [], name: 'GigNotOpen' },
  { type: 'error', inputs: [], name: 'InvalidSignatures' },
  { type: 'error', inputs: [], name: 'OnlyClient' },
  { type: 'error', inputs: [], name: 'OnlyProvider' },
  { type: 'error', inputs: [], name: 'OnlyProviderOrClient' },
  { type: 'error', inputs: [], name: 'ProposalAlreadyAccepted' },
  { type: 'error', inputs: [], name: 'ProposalDeadlinePassed' },
] as const;

/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ILimiter
/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iLimiterAbi = [
  {
    type: 'function',
    inputs: [
      { name: '_sender', internalType: 'address', type: 'address' },
      { name: '_questIdList', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    name: 'submitProofLimiter',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const;

/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IMulticall3
/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iMulticall3Abi = [
  {
    type: 'function',
    inputs: [
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'aggregate',
    outputs: [
      { name: 'blockNumber', internalType: 'uint256', type: 'uint256' },
      { name: 'returnData', internalType: 'bytes[]', type: 'bytes[]' },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call3[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'allowFailure', internalType: 'bool', type: 'bool' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'aggregate3',
    outputs: [
      {
        name: 'returnData',
        internalType: 'struct IMulticall3.Result[]',
        type: 'tuple[]',
        components: [
          { name: 'success', internalType: 'bool', type: 'bool' },
          { name: 'returnData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call3Value[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'allowFailure', internalType: 'bool', type: 'bool' },
          { name: 'value', internalType: 'uint256', type: 'uint256' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'aggregate3Value',
    outputs: [
      {
        name: 'returnData',
        internalType: 'struct IMulticall3.Result[]',
        type: 'tuple[]',
        components: [
          { name: 'success', internalType: 'bool', type: 'bool' },
          { name: 'returnData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'blockAndAggregate',
    outputs: [
      { name: 'blockNumber', internalType: 'uint256', type: 'uint256' },
      { name: 'blockHash', internalType: 'bytes32', type: 'bytes32' },
      {
        name: 'returnData',
        internalType: 'struct IMulticall3.Result[]',
        type: 'tuple[]',
        components: [
          { name: 'success', internalType: 'bool', type: 'bool' },
          { name: 'returnData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getBasefee',
    outputs: [{ name: 'basefee', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'blockNumber', internalType: 'uint256', type: 'uint256' }],
    name: 'getBlockHash',
    outputs: [{ name: 'blockHash', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getBlockNumber',
    outputs: [
      { name: 'blockNumber', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getChainId',
    outputs: [{ name: 'chainid', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getCurrentBlockCoinbase',
    outputs: [{ name: 'coinbase', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getCurrentBlockDifficulty',
    outputs: [{ name: 'difficulty', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getCurrentBlockGasLimit',
    outputs: [{ name: 'gaslimit', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getCurrentBlockTimestamp',
    outputs: [{ name: 'timestamp', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'addr', internalType: 'address', type: 'address' }],
    name: 'getEthBalance',
    outputs: [{ name: 'balance', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getLastBlockHash',
    outputs: [{ name: 'blockHash', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'requireSuccess', internalType: 'bool', type: 'bool' },
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'tryAggregate',
    outputs: [
      {
        name: 'returnData',
        internalType: 'struct IMulticall3.Result[]',
        type: 'tuple[]',
        components: [
          { name: 'success', internalType: 'bool', type: 'bool' },
          { name: 'returnData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'requireSuccess', internalType: 'bool', type: 'bool' },
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'tryBlockAndAggregate',
    outputs: [
      { name: 'blockNumber', internalType: 'uint256', type: 'uint256' },
      { name: 'blockHash', internalType: 'bytes32', type: 'bytes32' },
      {
        name: 'returnData',
        internalType: 'struct IMulticall3.Result[]',
        type: 'tuple[]',
        components: [
          { name: 'success', internalType: 'bool', type: 'bool' },
          { name: 'returnData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    stateMutability: 'payable',
  },
] as const;

/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IQuestChain
/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iQuestChainAbi = [
  {
    type: 'function',
    inputs: [
      {
        name: '_detailsList',
        internalType: 'struct QuestDetails[]',
        type: 'tuple[]',
        components: [
          { name: 'disabled', internalType: 'bool', type: 'bool' },
          { name: 'optional', internalType: 'bool', type: 'bool' },
          { name: 'skipReview', internalType: 'bool', type: 'bool' },
          { name: 'details', internalType: 'string', type: 'string' },
        ],
      },
    ],
    name: 'addQuests',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'burnToken',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_details', internalType: 'string', type: 'string' }],
    name: 'edit',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_questIdList', internalType: 'uint256[]', type: 'uint256[]' },
      {
        name: '_questDetails',
        internalType: 'struct QuestDetails[]',
        type: 'tuple[]',
        components: [
          { name: 'disabled', internalType: 'bool', type: 'bool' },
          { name: 'optional', internalType: 'bool', type: 'bool' },
          { name: 'skipReview', internalType: 'bool', type: 'bool' },
          { name: 'details', internalType: 'string', type: 'string' },
        ],
      },
    ],
    name: 'editQuests',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getTokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: '_info',
        internalType: 'struct QuestChainInfo',
        type: 'tuple',
        components: [
          { name: 'owners', internalType: 'address[]', type: 'address[]' },
          { name: 'admins', internalType: 'address[]', type: 'address[]' },
          { name: 'editors', internalType: 'address[]', type: 'address[]' },
          { name: 'reviewers', internalType: 'address[]', type: 'address[]' },
          {
            name: 'quests',
            internalType: 'struct QuestDetails[]',
            type: 'tuple[]',
            components: [
              { name: 'disabled', internalType: 'bool', type: 'bool' },
              { name: 'optional', internalType: 'bool', type: 'bool' },
              { name: 'skipReview', internalType: 'bool', type: 'bool' },
              { name: 'details', internalType: 'string', type: 'string' },
            ],
          },
          { name: 'paused', internalType: 'bool', type: 'bool' },
          { name: 'details', internalType: 'string', type: 'string' },
          { name: 'tokenURI', internalType: 'string', type: 'string' },
        ],
      },
    ],
    name: 'init',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'mintToken',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'questChainFactory',
    outputs: [
      {
        name: '',
        internalType: 'contract IQuestChainFactory',
        type: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'questChainId',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'questChainToken',
    outputs: [
      { name: '', internalType: 'contract IQuestChainToken', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_quester', internalType: 'address', type: 'address' },
      { name: '_questId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'questStatus',
    outputs: [{ name: '', internalType: 'enum QuestStatus', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_questerList', internalType: 'address[]', type: 'address[]' },
      { name: '_questIdList', internalType: 'uint256[]', type: 'uint256[]' },
      { name: '_successList', internalType: 'bool[]', type: 'bool[]' },
      { name: '_detailsList', internalType: 'string[]', type: 'string[]' },
    ],
    name: 'reviewProofs',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_tokenURI', internalType: 'string', type: 'string' }],
    name: 'setTokenURI',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_questIdList', internalType: 'uint256[]', type: 'uint256[]' },
      { name: '_proofList', internalType: 'string[]', type: 'string[]' },
    ],
    name: 'submitProofs',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'details',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
    ],
    name: 'QuestChainEdited',
  },
  { type: 'event', anonymous: false, inputs: [], name: 'QuestChainInit' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'tokenURI',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
    ],
    name: 'QuestChainTokenURIUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'questerList',
        internalType: 'address[]',
        type: 'address[]',
        indexed: false,
      },
      {
        name: 'questIdList',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
      {
        name: 'successList',
        internalType: 'bool[]',
        type: 'bool[]',
        indexed: false,
      },
      {
        name: 'detailsList',
        internalType: 'string[]',
        type: 'string[]',
        indexed: false,
      },
    ],
    name: 'QuestProofsReviewed',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'questIdList',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
      {
        name: 'proofList',
        internalType: 'string[]',
        type: 'string[]',
        indexed: false,
      },
    ],
    name: 'QuestProofsSubmitted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'numQuests',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'QuestsAdded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'questIdList',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
    ],
    name: 'QuestsEdited',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'limiterContract',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'SetLimiter',
  },
  {
    type: 'error',
    inputs: [{ name: 'questId', internalType: 'uint256', type: 'uint256' }],
    name: 'AlreadyPassed',
  },
  { type: 'error', inputs: [], name: 'ChainIncomplete' },
  { type: 'error', inputs: [], name: 'InvalidParams' },
  { type: 'error', inputs: [], name: 'NoOwners' },
  { type: 'error', inputs: [], name: 'NoQuestsFound' },
  { type: 'error', inputs: [], name: 'NoSuccessfulReview' },
  { type: 'error', inputs: [], name: 'NotFactory' },
  {
    type: 'error',
    inputs: [{ name: 'questId', internalType: 'uint256', type: 'uint256' }],
    name: 'QuestDisabled',
  },
  {
    type: 'error',
    inputs: [{ name: 'questId', internalType: 'uint256', type: 'uint256' }],
    name: 'QuestNotFound',
  },
  {
    type: 'error',
    inputs: [{ name: 'questId', internalType: 'uint256', type: 'uint256' }],
    name: 'QuestNotInReview',
  },
] as const;

/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IQuestChainFactory
/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iQuestChainFactoryAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'admin',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: '_info',
        internalType: 'struct QuestChainInfo',
        type: 'tuple',
        components: [
          { name: 'owners', internalType: 'address[]', type: 'address[]' },
          { name: 'admins', internalType: 'address[]', type: 'address[]' },
          { name: 'editors', internalType: 'address[]', type: 'address[]' },
          { name: 'reviewers', internalType: 'address[]', type: 'address[]' },
          {
            name: 'quests',
            internalType: 'struct QuestDetails[]',
            type: 'tuple[]',
            components: [
              { name: 'disabled', internalType: 'bool', type: 'bool' },
              { name: 'optional', internalType: 'bool', type: 'bool' },
              { name: 'skipReview', internalType: 'bool', type: 'bool' },
              { name: 'details', internalType: 'string', type: 'string' },
            ],
          },
          { name: 'paused', internalType: 'bool', type: 'bool' },
          { name: 'details', internalType: 'string', type: 'string' },
          { name: 'tokenURI', internalType: 'string', type: 'string' },
        ],
      },
      { name: '_salt', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'create',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_index', internalType: 'uint256', type: 'uint256' }],
    name: 'getQuestChainAddress',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'questChainCount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'questChainTemplate',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'questChainToken',
    outputs: [
      { name: '', internalType: 'contract IQuestChainToken', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'proposedAdmin',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'AdminReplaceProposed',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'newAdmin',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'AdminReplaced',
  },
  { type: 'event', anonymous: false, inputs: [], name: 'FactorySetup' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'questChainCount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'questChainAddress',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'QuestChainCreated',
  },
  { type: 'error', inputs: [], name: 'NoAddressChange' },
  { type: 'error', inputs: [], name: 'NoUintChange' },
  { type: 'error', inputs: [], name: 'NotAdmin' },
  { type: 'error', inputs: [], name: 'NotProposedAdmin' },
  { type: 'error', inputs: [], name: 'TooSoon' },
  { type: 'error', inputs: [], name: 'ZeroAddress' },
] as const;

/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IQuestChainFactoryFunctions
/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iQuestChainFactoryFunctionsAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'admin',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: '_info',
        internalType: 'struct QuestChainInfo',
        type: 'tuple',
        components: [
          { name: 'owners', internalType: 'address[]', type: 'address[]' },
          { name: 'admins', internalType: 'address[]', type: 'address[]' },
          { name: 'editors', internalType: 'address[]', type: 'address[]' },
          { name: 'reviewers', internalType: 'address[]', type: 'address[]' },
          {
            name: 'quests',
            internalType: 'struct QuestDetails[]',
            type: 'tuple[]',
            components: [
              { name: 'disabled', internalType: 'bool', type: 'bool' },
              { name: 'optional', internalType: 'bool', type: 'bool' },
              { name: 'skipReview', internalType: 'bool', type: 'bool' },
              { name: 'details', internalType: 'string', type: 'string' },
            ],
          },
          { name: 'paused', internalType: 'bool', type: 'bool' },
          { name: 'details', internalType: 'string', type: 'string' },
          { name: 'tokenURI', internalType: 'string', type: 'string' },
        ],
      },
      { name: '_salt', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'create',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_index', internalType: 'uint256', type: 'uint256' }],
    name: 'getQuestChainAddress',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'questChainCount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'questChainTemplate',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'questChainToken',
    outputs: [
      { name: '', internalType: 'contract IQuestChainToken', type: 'address' },
    ],
    stateMutability: 'view',
  },
] as const;

/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IQuestChainFactorySignals
/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iQuestChainFactorySignalsAbi = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'proposedAdmin',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'AdminReplaceProposed',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'newAdmin',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'AdminReplaced',
  },
  { type: 'event', anonymous: false, inputs: [], name: 'FactorySetup' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'questChainCount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'questChainAddress',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'QuestChainCreated',
  },
  { type: 'error', inputs: [], name: 'NoAddressChange' },
  { type: 'error', inputs: [], name: 'NoUintChange' },
  { type: 'error', inputs: [], name: 'NotAdmin' },
  { type: 'error', inputs: [], name: 'NotProposedAdmin' },
  { type: 'error', inputs: [], name: 'TooSoon' },
  { type: 'error', inputs: [], name: 'ZeroAddress' },
] as const;

/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IQuestChainFunctions
/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iQuestChainFunctionsAbi = [
  {
    type: 'function',
    inputs: [
      {
        name: '_detailsList',
        internalType: 'struct QuestDetails[]',
        type: 'tuple[]',
        components: [
          { name: 'disabled', internalType: 'bool', type: 'bool' },
          { name: 'optional', internalType: 'bool', type: 'bool' },
          { name: 'skipReview', internalType: 'bool', type: 'bool' },
          { name: 'details', internalType: 'string', type: 'string' },
        ],
      },
    ],
    name: 'addQuests',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'burnToken',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_details', internalType: 'string', type: 'string' }],
    name: 'edit',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_questIdList', internalType: 'uint256[]', type: 'uint256[]' },
      {
        name: '_questDetails',
        internalType: 'struct QuestDetails[]',
        type: 'tuple[]',
        components: [
          { name: 'disabled', internalType: 'bool', type: 'bool' },
          { name: 'optional', internalType: 'bool', type: 'bool' },
          { name: 'skipReview', internalType: 'bool', type: 'bool' },
          { name: 'details', internalType: 'string', type: 'string' },
        ],
      },
    ],
    name: 'editQuests',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getTokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: '_info',
        internalType: 'struct QuestChainInfo',
        type: 'tuple',
        components: [
          { name: 'owners', internalType: 'address[]', type: 'address[]' },
          { name: 'admins', internalType: 'address[]', type: 'address[]' },
          { name: 'editors', internalType: 'address[]', type: 'address[]' },
          { name: 'reviewers', internalType: 'address[]', type: 'address[]' },
          {
            name: 'quests',
            internalType: 'struct QuestDetails[]',
            type: 'tuple[]',
            components: [
              { name: 'disabled', internalType: 'bool', type: 'bool' },
              { name: 'optional', internalType: 'bool', type: 'bool' },
              { name: 'skipReview', internalType: 'bool', type: 'bool' },
              { name: 'details', internalType: 'string', type: 'string' },
            ],
          },
          { name: 'paused', internalType: 'bool', type: 'bool' },
          { name: 'details', internalType: 'string', type: 'string' },
          { name: 'tokenURI', internalType: 'string', type: 'string' },
        ],
      },
    ],
    name: 'init',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'mintToken',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'questChainFactory',
    outputs: [
      {
        name: '',
        internalType: 'contract IQuestChainFactory',
        type: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'questChainId',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'questChainToken',
    outputs: [
      { name: '', internalType: 'contract IQuestChainToken', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_quester', internalType: 'address', type: 'address' },
      { name: '_questId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'questStatus',
    outputs: [{ name: '', internalType: 'enum QuestStatus', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_questerList', internalType: 'address[]', type: 'address[]' },
      { name: '_questIdList', internalType: 'uint256[]', type: 'uint256[]' },
      { name: '_successList', internalType: 'bool[]', type: 'bool[]' },
      { name: '_detailsList', internalType: 'string[]', type: 'string[]' },
    ],
    name: 'reviewProofs',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_tokenURI', internalType: 'string', type: 'string' }],
    name: 'setTokenURI',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_questIdList', internalType: 'uint256[]', type: 'uint256[]' },
      { name: '_proofList', internalType: 'string[]', type: 'string[]' },
    ],
    name: 'submitProofs',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const;

/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IQuestChainSignals
/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iQuestChainSignalsAbi = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'details',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
    ],
    name: 'QuestChainEdited',
  },
  { type: 'event', anonymous: false, inputs: [], name: 'QuestChainInit' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'tokenURI',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
    ],
    name: 'QuestChainTokenURIUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'questerList',
        internalType: 'address[]',
        type: 'address[]',
        indexed: false,
      },
      {
        name: 'questIdList',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
      {
        name: 'successList',
        internalType: 'bool[]',
        type: 'bool[]',
        indexed: false,
      },
      {
        name: 'detailsList',
        internalType: 'string[]',
        type: 'string[]',
        indexed: false,
      },
    ],
    name: 'QuestProofsReviewed',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'questIdList',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
      {
        name: 'proofList',
        internalType: 'string[]',
        type: 'string[]',
        indexed: false,
      },
    ],
    name: 'QuestProofsSubmitted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'numQuests',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'QuestsAdded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'questIdList',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
    ],
    name: 'QuestsEdited',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'limiterContract',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'SetLimiter',
  },
  {
    type: 'error',
    inputs: [{ name: 'questId', internalType: 'uint256', type: 'uint256' }],
    name: 'AlreadyPassed',
  },
  { type: 'error', inputs: [], name: 'ChainIncomplete' },
  { type: 'error', inputs: [], name: 'InvalidParams' },
  { type: 'error', inputs: [], name: 'NoOwners' },
  { type: 'error', inputs: [], name: 'NoQuestsFound' },
  { type: 'error', inputs: [], name: 'NoSuccessfulReview' },
  { type: 'error', inputs: [], name: 'NotFactory' },
  {
    type: 'error',
    inputs: [{ name: 'questId', internalType: 'uint256', type: 'uint256' }],
    name: 'QuestDisabled',
  },
  {
    type: 'error',
    inputs: [{ name: 'questId', internalType: 'uint256', type: 'uint256' }],
    name: 'QuestNotFound',
  },
  {
    type: 'error',
    inputs: [{ name: 'questId', internalType: 'uint256', type: 'uint256' }],
    name: 'QuestNotInReview',
  },
] as const;

/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IQuestChainToken
/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iQuestChainTokenAbi = [
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'accounts', internalType: 'address[]', type: 'address[]' },
      { name: 'ids', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    name: 'balanceOfBatch',
    outputs: [{ name: '', internalType: 'uint256[]', type: 'uint256[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_user', internalType: 'address', type: 'address' },
      { name: '_tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'burn',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_user', internalType: 'address', type: 'address' },
      { name: '_tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'mint',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'questChainFactory',
    outputs: [
      {
        name: '',
        internalType: 'contract IQuestChainFactory',
        type: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'ids', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'values', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeBatchTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_tokenId', internalType: 'uint256', type: 'uint256' },
      { name: '_questChain', internalType: 'address', type: 'address' },
    ],
    name: 'setTokenOwner',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_tokenId', internalType: 'uint256', type: 'uint256' },
      { name: '_tokenURI', internalType: 'string', type: 'string' },
    ],
    name: 'setTokenURI',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenOwner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'id', internalType: 'uint256', type: 'uint256' }],
    name: 'uri',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'ids',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
      {
        name: 'values',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
    ],
    name: 'TransferBatch',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: false },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'TransferSingle',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'value', internalType: 'string', type: 'string', indexed: false },
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: true },
    ],
    name: 'URI',
  },
  { type: 'error', inputs: [], name: 'AlreadyMinted' },
  { type: 'error', inputs: [], name: 'NotFactory' },
  {
    type: 'error',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'NotTokenOwner',
  },
  { type: 'error', inputs: [], name: 'SoulBound' },
  { type: 'error', inputs: [], name: 'TokenNotFound' },
] as const;

/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IQuestChainTokenFunctions
/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iQuestChainTokenFunctionsAbi = [
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'accounts', internalType: 'address[]', type: 'address[]' },
      { name: 'ids', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    name: 'balanceOfBatch',
    outputs: [{ name: '', internalType: 'uint256[]', type: 'uint256[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_user', internalType: 'address', type: 'address' },
      { name: '_tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'burn',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_user', internalType: 'address', type: 'address' },
      { name: '_tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'mint',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'questChainFactory',
    outputs: [
      {
        name: '',
        internalType: 'contract IQuestChainFactory',
        type: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'ids', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'values', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeBatchTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_tokenId', internalType: 'uint256', type: 'uint256' },
      { name: '_questChain', internalType: 'address', type: 'address' },
    ],
    name: 'setTokenOwner',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_tokenId', internalType: 'uint256', type: 'uint256' },
      { name: '_tokenURI', internalType: 'string', type: 'string' },
    ],
    name: 'setTokenURI',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenOwner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'id', internalType: 'uint256', type: 'uint256' }],
    name: 'uri',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'ids',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
      {
        name: 'values',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
    ],
    name: 'TransferBatch',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: false },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'TransferSingle',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'value', internalType: 'string', type: 'string', indexed: false },
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: true },
    ],
    name: 'URI',
  },
] as const;

/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IQuestChainTokenSignals
/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iQuestChainTokenSignalsAbi = [
  { type: 'error', inputs: [], name: 'AlreadyMinted' },
  { type: 'error', inputs: [], name: 'NotFactory' },
  {
    type: 'error',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'NotTokenOwner',
  },
  { type: 'error', inputs: [], name: 'SoulBound' },
  { type: 'error', inputs: [], name: 'TokenNotFound' },
] as const;

/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ISmartInvoice
/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iSmartInvoiceAbi = [
  {
    type: 'function',
    inputs: [
      { name: '_recipient', internalType: 'address', type: 'address' },
      { name: '_amounts', internalType: 'uint256[]', type: 'uint256[]' },
      { name: '_data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'init',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const;

/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ISmartInvoiceEscrow
/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iSmartInvoiceEscrowAbi = [
  {
    type: 'function',
    inputs: [
      { name: '_milestones', internalType: 'uint256[]', type: 'uint256[]' },
      { name: '_details', internalType: 'string', type: 'string' },
    ],
    name: 'addMilestones',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_milestones', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    name: 'addMilestones',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_recipient', internalType: 'address', type: 'address' },
      { name: '_amounts', internalType: 'uint256[]', type: 'uint256[]' },
      { name: '_data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'init',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_details', internalType: 'string', type: 'string' }],
    name: 'lock',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [{ name: '_milestone', internalType: 'uint256', type: 'uint256' }],
    name: 'release',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'release',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_token', internalType: 'address', type: 'address' }],
    name: 'releaseTokens',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_clientAward', internalType: 'uint256', type: 'uint256' },
      { name: '_providerAward', internalType: 'uint256', type: 'uint256' },
      { name: '_details', internalType: 'string', type: 'string' },
    ],
    name: 'resolve',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'verify',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'withdraw',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_token', internalType: 'address', type: 'address' }],
    name: 'withdrawTokens',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Deposit',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'details',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
    ],
    name: 'DetailsUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'details',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
    ],
    name: 'Lock',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'invoice',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'milestones',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
    ],
    name: 'MilestonesAdded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'milestone',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Release',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'resolver',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'clientAward',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'providerAward',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'resolutionFee',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'details',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
    ],
    name: 'Resolve',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'resolver',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'clientAward',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'providerAward',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'ruling',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Rule',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'client',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'invoice',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'Verified',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'balance',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Withdraw',
  },
  { type: 'error', inputs: [], name: 'BalanceIsZero' },
  { type: 'error', inputs: [], name: 'DurationEnded' },
  { type: 'error', inputs: [], name: 'DurationTooLong' },
  { type: 'error', inputs: [], name: 'ExceedsMilestoneLimit' },
  { type: 'error', inputs: [], name: 'IncorrectDisputeId' },
  { type: 'error', inputs: [], name: 'InsufficientBalance' },
  { type: 'error', inputs: [], name: 'InvalidArbitratorResolver' },
  { type: 'error', inputs: [], name: 'InvalidClient' },
  { type: 'error', inputs: [], name: 'InvalidIndividualResolver' },
  { type: 'error', inputs: [], name: 'InvalidMilestone' },
  { type: 'error', inputs: [], name: 'InvalidProvider' },
  { type: 'error', inputs: [], name: 'InvalidResolutionRate' },
  { type: 'error', inputs: [], name: 'InvalidResolver' },
  { type: 'error', inputs: [], name: 'InvalidResolverType' },
  { type: 'error', inputs: [], name: 'InvalidRuling' },
  { type: 'error', inputs: [], name: 'InvalidToken' },
  { type: 'error', inputs: [], name: 'InvalidWrappedNativeToken' },
  { type: 'error', inputs: [], name: 'Locked' },
  { type: 'error', inputs: [], name: 'NoMilestones' },
  { type: 'error', inputs: [], name: 'NotClient' },
  { type: 'error', inputs: [], name: 'NotParty' },
  { type: 'error', inputs: [], name: 'NotProvider' },
  { type: 'error', inputs: [], name: 'NotResolver' },
  { type: 'error', inputs: [], name: 'ResolutionMismatch' },
  { type: 'error', inputs: [], name: 'Terminated' },
] as const;

/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ISmartInvoiceFactory
/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iSmartInvoiceFactoryAbi = [
  {
    type: 'function',
    inputs: [
      { name: '_recipient', internalType: 'address', type: 'address' },
      { name: '_amounts', internalType: 'uint256[]', type: 'uint256[]' },
      { name: '_data', internalType: 'bytes', type: 'bytes' },
      { name: '_type', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'create',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_recipient', internalType: 'address', type: 'address' },
      { name: '_amounts', internalType: 'uint256[]', type: 'uint256[]' },
      { name: '_data', internalType: 'bytes', type: 'bytes' },
      { name: '_type', internalType: 'bytes32', type: 'bytes32' },
      { name: '_salt', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'createDeterministic',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_type', internalType: 'bytes32', type: 'bytes32' },
      { name: '_salt', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'predictDeterministicAddress',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_resolver', internalType: 'address', type: 'address' }],
    name: 'resolutionRateOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'invoiceType',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'version',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'implementation',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'AddImplementation',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'invoiceId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'invoiceAddress',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'amounts',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
      {
        name: 'invoiceType',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'version',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'LogNewInvoice',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [],
    name: 'SmartInvoiceFactoryInit',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'resolver',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'resolutionRate',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'details',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
    ],
    name: 'UpdateResolutionRate',
  },
  { type: 'error', inputs: [], name: 'ImplementationDoesNotExist' },
  { type: 'error', inputs: [], name: 'InvalidWrappedNativeToken' },
  { type: 'error', inputs: [], name: 'ZeroAddressImplementation' },
] as const;

/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IWRAPPED
/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iwrappedAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'deposit',
    outputs: [],
    stateMutability: 'payable',
  },
] as const;

/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Initializable
/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const initializableAbi = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'version',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
    ],
    name: 'Initialized',
  },
  { type: 'error', inputs: [], name: 'InvalidInitialization' },
  { type: 'error', inputs: [], name: 'NotInitializing' },
] as const;

/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// LimiterTokenFee
/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const limiterTokenFeeAbi = [
  {
    type: 'function',
    inputs: [
      { name: '_questChain', internalType: 'address', type: 'address' },
      { name: '_tokenAddress', internalType: 'address', type: 'address' },
      { name: '_category', internalType: 'enum Category', type: 'uint8' },
      { name: '_nftId', internalType: 'uint256', type: 'uint256' },
      { name: '_treasuryAddress', internalType: 'address', type: 'address' },
      { name: '_feeAmount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'addQuestChainDetails',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'questChainDetails',
    outputs: [
      { name: 'tokenAddress', internalType: 'address', type: 'address' },
      { name: 'category', internalType: 'enum Category', type: 'uint8' },
      { name: 'nftId', internalType: 'uint256', type: 'uint256' },
      { name: 'treasuryAddress', internalType: 'address', type: 'address' },
      { name: 'feeAmount', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_sender', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    name: 'submitProofLimiter',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: '_questChain',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: '_tokenAddress',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: '_treasuryAddress',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: '_feeAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: '_sender',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'AddQuestChainDetails',
  },
  { type: 'error', inputs: [], name: 'Limited' },
  { type: 'error', inputs: [], name: 'OnlyAdmin' },
  {
    type: 'error',
    inputs: [{ name: 'categoryValue', internalType: 'uint8', type: 'uint8' }],
    name: 'UnsupportedCategory',
  },
] as const;

/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// LimiterTokenGated
/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const limiterTokenGatedAbi = [
  {
    type: 'function',
    inputs: [
      { name: '_questChain', internalType: 'address', type: 'address' },
      { name: '_tokenAddress', internalType: 'address', type: 'address' },
      { name: '_category', internalType: 'enum Category', type: 'uint8' },
      { name: '_nftId', internalType: 'uint256', type: 'uint256' },
      { name: '_minBalance', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'addQuestChainDetails',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'questChainDetails',
    outputs: [
      { name: 'tokenAddress', internalType: 'address', type: 'address' },
      { name: 'category', internalType: 'enum Category', type: 'uint8' },
      { name: 'nftId', internalType: 'uint256', type: 'uint256' },
      { name: 'minTokenBalance', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_sender', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    name: 'submitProofLimiter',
    outputs: [],
    stateMutability: 'view',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: '_questChain',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: '_tokenAddress',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: '_minBalance',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: '_sender',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'AddQuestChainDetails',
  },
  { type: 'error', inputs: [], name: 'Limited' },
  { type: 'error', inputs: [], name: 'OnlyAdmin' },
  {
    type: 'error',
    inputs: [{ name: 'categoryValue', internalType: 'uint8', type: 'uint8' }],
    name: 'UnsupportedCategory',
  },
] as const;

/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Math
/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const mathAbi = [
  { type: 'error', inputs: [], name: 'MathOverflowedMulDiv' },
] as const;

/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MockToken
/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const mockTokenAbi = [
  { type: 'constructor', inputs: [], stateMutability: 'nonpayable' },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'mint',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_account', internalType: 'address', type: 'address' },
      { name: '_amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'setBalanceOf',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'error',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'allowance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientAllowance',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'spender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSpender',
  },
] as const;

/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MockWETH
/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const mockWethAbi = [
  { type: 'receive', stateMutability: 'payable' },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'guy', internalType: 'address', type: 'address' },
      { name: 'wad', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'deposit',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'dst', internalType: 'address', type: 'address' },
      { name: 'wad', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'src', internalType: 'address', type: 'address' },
      { name: 'dst', internalType: 'address', type: 'address' },
      { name: 'wad', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'wad', internalType: 'uint256', type: 'uint256' }],
    name: 'withdraw',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'src', internalType: 'address', type: 'address', indexed: true },
      { name: 'guy', internalType: 'address', type: 'address', indexed: true },
      { name: 'wad', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'dst', internalType: 'address', type: 'address', indexed: true },
      { name: 'wad', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'Deposit',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'src', internalType: 'address', type: 'address', indexed: true },
      { name: 'dst', internalType: 'address', type: 'address', indexed: true },
      { name: 'wad', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'Transfer',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'src', internalType: 'address', type: 'address', indexed: true },
      { name: 'wad', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'Withdrawal',
  },
  { type: 'error', inputs: [], name: 'NotEnoughAllowance' },
  { type: 'error', inputs: [], name: 'NotEnoughBalance' },
] as const;

/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MultiToken
/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const multiTokenAbi = [
  {
    type: 'error',
    inputs: [{ name: 'categoryValue', internalType: 'uint8', type: 'uint8' }],
    name: 'UnsupportedCategory',
  },
] as const;

/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Pausable
/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const pausableAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'paused',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'Paused',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'Unpaused',
  },
  { type: 'error', inputs: [], name: 'EnforcedPause' },
  { type: 'error', inputs: [], name: 'ExpectedPause' },
] as const;

/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// QuestChain
/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const questChainAbi = [
  { type: 'constructor', inputs: [], stateMutability: 'nonpayable' },
  {
    type: 'function',
    inputs: [],
    name: 'ADMIN_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'DEFAULT_ADMIN_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'EDITOR_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'REVIEWER_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: '_questDetails',
        internalType: 'struct QuestDetails[]',
        type: 'tuple[]',
        components: [
          { name: 'disabled', internalType: 'bool', type: 'bool' },
          { name: 'optional', internalType: 'bool', type: 'bool' },
          { name: 'skipReview', internalType: 'bool', type: 'bool' },
          { name: 'details', internalType: 'string', type: 'string' },
        ],
      },
    ],
    name: 'addQuests',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'burnToken',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'details',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_details', internalType: 'string', type: 'string' }],
    name: 'edit',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_questIdList', internalType: 'uint256[]', type: 'uint256[]' },
      {
        name: '_questDetails',
        internalType: 'struct QuestDetails[]',
        type: 'tuple[]',
        components: [
          { name: 'disabled', internalType: 'bool', type: 'bool' },
          { name: 'optional', internalType: 'bool', type: 'bool' },
          { name: 'skipReview', internalType: 'bool', type: 'bool' },
          { name: 'details', internalType: 'string', type: 'string' },
        ],
      },
    ],
    name: 'editQuests',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'role', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getRoleAdmin',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getTokenURI',
    outputs: [{ name: 'uri', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_role', internalType: 'bytes32', type: 'bytes32' },
      { name: '_account', internalType: 'address', type: 'address' },
    ],
    name: 'grantRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'hasRole',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: '_info',
        internalType: 'struct QuestChainInfo',
        type: 'tuple',
        components: [
          { name: 'owners', internalType: 'address[]', type: 'address[]' },
          { name: 'admins', internalType: 'address[]', type: 'address[]' },
          { name: 'editors', internalType: 'address[]', type: 'address[]' },
          { name: 'reviewers', internalType: 'address[]', type: 'address[]' },
          {
            name: 'quests',
            internalType: 'struct QuestDetails[]',
            type: 'tuple[]',
            components: [
              { name: 'disabled', internalType: 'bool', type: 'bool' },
              { name: 'optional', internalType: 'bool', type: 'bool' },
              { name: 'skipReview', internalType: 'bool', type: 'bool' },
              { name: 'details', internalType: 'string', type: 'string' },
            ],
          },
          { name: 'paused', internalType: 'bool', type: 'bool' },
          { name: 'details', internalType: 'string', type: 'string' },
          { name: 'tokenURI', internalType: 'string', type: 'string' },
        ],
      },
    ],
    name: 'init',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'limiterContract',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'mintToken',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'pause',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'paused',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'questChainFactory',
    outputs: [
      {
        name: '',
        internalType: 'contract IQuestChainFactory',
        type: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'questChainId',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'questChainToken',
    outputs: [
      { name: '', internalType: 'contract IQuestChainToken', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'questCount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'questDetails',
    outputs: [
      { name: 'disabled', internalType: 'bool', type: 'bool' },
      { name: 'optional', internalType: 'bool', type: 'bool' },
      { name: 'skipReview', internalType: 'bool', type: 'bool' },
      { name: 'details', internalType: 'string', type: 'string' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_quester', internalType: 'address', type: 'address' },
      { name: '_questId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'questStatus',
    outputs: [
      { name: 'status', internalType: 'enum QuestStatus', type: 'uint8' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'callerConfirmation', internalType: 'address', type: 'address' },
    ],
    name: 'renounceRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_questerList', internalType: 'address[]', type: 'address[]' },
      { name: '_questIdList', internalType: 'uint256[]', type: 'uint256[]' },
      { name: '_successList', internalType: 'bool[]', type: 'bool[]' },
      { name: '_detailsList', internalType: 'string[]', type: 'string[]' },
    ],
    name: 'reviewProofs',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_role', internalType: 'bytes32', type: 'bytes32' },
      { name: '_account', internalType: 'address', type: 'address' },
    ],
    name: 'revokeRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_limiterContract', internalType: 'address', type: 'address' },
    ],
    name: 'setLimiter',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_tokenURI', internalType: 'string', type: 'string' }],
    name: 'setTokenURI',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_questIdList', internalType: 'uint256[]', type: 'uint256[]' },
      { name: '_proofList', internalType: 'string[]', type: 'string[]' },
    ],
    name: 'submitProofs',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'unpause',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'version',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
    ],
    name: 'Initialized',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'Paused',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'details',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
    ],
    name: 'QuestChainEdited',
  },
  { type: 'event', anonymous: false, inputs: [], name: 'QuestChainInit' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'tokenURI',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
    ],
    name: 'QuestChainTokenURIUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'questerList',
        internalType: 'address[]',
        type: 'address[]',
        indexed: false,
      },
      {
        name: 'questIdList',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
      {
        name: 'successList',
        internalType: 'bool[]',
        type: 'bool[]',
        indexed: false,
      },
      {
        name: 'detailsList',
        internalType: 'string[]',
        type: 'string[]',
        indexed: false,
      },
    ],
    name: 'QuestProofsReviewed',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'questIdList',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
      {
        name: 'proofList',
        internalType: 'string[]',
        type: 'string[]',
        indexed: false,
      },
    ],
    name: 'QuestProofsSubmitted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'numQuests',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'QuestsAdded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'questIdList',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
    ],
    name: 'QuestsEdited',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'previousAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'newAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
    ],
    name: 'RoleAdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleGranted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleRevoked',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'limiterContract',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'SetLimiter',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'Unpaused',
  },
  { type: 'error', inputs: [], name: 'AccessControlBadConfirmation' },
  {
    type: 'error',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'neededRole', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'AccessControlUnauthorizedAccount',
  },
  {
    type: 'error',
    inputs: [{ name: 'questId', internalType: 'uint256', type: 'uint256' }],
    name: 'AlreadyPassed',
  },
  { type: 'error', inputs: [], name: 'ChainIncomplete' },
  { type: 'error', inputs: [], name: 'EnforcedPause' },
  { type: 'error', inputs: [], name: 'ExpectedPause' },
  { type: 'error', inputs: [], name: 'InvalidInitialization' },
  { type: 'error', inputs: [], name: 'InvalidParams' },
  { type: 'error', inputs: [], name: 'NoOwners' },
  { type: 'error', inputs: [], name: 'NoQuestsFound' },
  { type: 'error', inputs: [], name: 'NoSuccessfulReview' },
  { type: 'error', inputs: [], name: 'NotFactory' },
  { type: 'error', inputs: [], name: 'NotInitializing' },
  {
    type: 'error',
    inputs: [{ name: 'questId', internalType: 'uint256', type: 'uint256' }],
    name: 'QuestDisabled',
  },
  {
    type: 'error',
    inputs: [{ name: 'questId', internalType: 'uint256', type: 'uint256' }],
    name: 'QuestNotFound',
  },
  {
    type: 'error',
    inputs: [{ name: 'questId', internalType: 'uint256', type: 'uint256' }],
    name: 'QuestNotInReview',
  },
  { type: 'error', inputs: [], name: 'ReentrancyGuardReentrantCall' },
] as const;

/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// QuestChainFactory
/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const questChainFactoryAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: '_template', internalType: 'address', type: 'address' },
      { name: '_admin', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'admin',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'adminProposalTimestamp',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: '_info',
        internalType: 'struct QuestChainInfo',
        type: 'tuple',
        components: [
          { name: 'owners', internalType: 'address[]', type: 'address[]' },
          { name: 'admins', internalType: 'address[]', type: 'address[]' },
          { name: 'editors', internalType: 'address[]', type: 'address[]' },
          { name: 'reviewers', internalType: 'address[]', type: 'address[]' },
          {
            name: 'quests',
            internalType: 'struct QuestDetails[]',
            type: 'tuple[]',
            components: [
              { name: 'disabled', internalType: 'bool', type: 'bool' },
              { name: 'optional', internalType: 'bool', type: 'bool' },
              { name: 'skipReview', internalType: 'bool', type: 'bool' },
              { name: 'details', internalType: 'string', type: 'string' },
            ],
          },
          { name: 'paused', internalType: 'bool', type: 'bool' },
          { name: 'details', internalType: 'string', type: 'string' },
          { name: 'tokenURI', internalType: 'string', type: 'string' },
        ],
      },
      { name: '_salt', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'create',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'executeAdminReplace',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_index', internalType: 'uint256', type: 'uint256' }],
    name: 'getQuestChainAddress',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_admin', internalType: 'address', type: 'address' }],
    name: 'proposeAdminReplace',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'proposedAdmin',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'questChainCount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'questChainTemplate',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'questChainToken',
    outputs: [
      { name: '', internalType: 'contract IQuestChainToken', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'proposedAdmin',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'AdminReplaceProposed',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'newAdmin',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'AdminReplaced',
  },
  { type: 'event', anonymous: false, inputs: [], name: 'FactorySetup' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'questChainCount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'questChainAddress',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'QuestChainCreated',
  },
  { type: 'error', inputs: [], name: 'ERC1167FailedCreateClone' },
  { type: 'error', inputs: [], name: 'NoAddressChange' },
  { type: 'error', inputs: [], name: 'NoUintChange' },
  { type: 'error', inputs: [], name: 'NotAdmin' },
  { type: 'error', inputs: [], name: 'NotProposedAdmin' },
  { type: 'error', inputs: [], name: 'ReentrancyGuardReentrantCall' },
  { type: 'error', inputs: [], name: 'TooSoon' },
  { type: 'error', inputs: [], name: 'ZeroAddress' },
] as const;

/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// QuestChainToken
/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const questChainTokenAbi = [
  { type: 'constructor', inputs: [], stateMutability: 'nonpayable' },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'accounts', internalType: 'address[]', type: 'address[]' },
      { name: 'ids', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    name: 'balanceOfBatch',
    outputs: [{ name: '', internalType: 'uint256[]', type: 'uint256[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_user', internalType: 'address', type: 'address' },
      { name: '_tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'burn',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_user', internalType: 'address', type: 'address' },
      { name: '_tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'mint',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'questChainFactory',
    outputs: [
      {
        name: '',
        internalType: 'contract IQuestChainFactory',
        type: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'ids', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'values', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeBatchTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_tokenId', internalType: 'uint256', type: 'uint256' },
      { name: '_questChain', internalType: 'address', type: 'address' },
    ],
    name: 'setTokenOwner',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_tokenId', internalType: 'uint256', type: 'uint256' },
      { name: '_tokenURI', internalType: 'string', type: 'string' },
    ],
    name: 'setTokenURI',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenOwner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'uri',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'ids',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
      {
        name: 'values',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
    ],
    name: 'TransferBatch',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: false },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'TransferSingle',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'value', internalType: 'string', type: 'string', indexed: false },
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: true },
    ],
    name: 'URI',
  },
  { type: 'error', inputs: [], name: 'AlreadyMinted' },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC1155InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC1155InvalidApprover',
  },
  {
    type: 'error',
    inputs: [
      { name: 'idsLength', internalType: 'uint256', type: 'uint256' },
      { name: 'valuesLength', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC1155InvalidArrayLength',
  },
  {
    type: 'error',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'ERC1155InvalidOperator',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC1155InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC1155InvalidSender',
  },
  {
    type: 'error',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'ERC1155MissingApprovalForAll',
  },
  { type: 'error', inputs: [], name: 'NotFactory' },
  {
    type: 'error',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'NotTokenOwner',
  },
  { type: 'error', inputs: [], name: 'SoulBound' },
  { type: 'error', inputs: [], name: 'TokenNotFound' },
] as const;

/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ReentrancyGuard
/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const reentrancyGuardAbi = [
  { type: 'error', inputs: [], name: 'ReentrancyGuardReentrantCall' },
] as const;

/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SafeERC20
/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const safeErc20Abi = [
  {
    type: 'error',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'currentAllowance', internalType: 'uint256', type: 'uint256' },
      { name: 'requestedDecrease', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'SafeERC20FailedDecreaseAllowance',
  },
  {
    type: 'error',
    inputs: [{ name: 'token', internalType: 'address', type: 'address' }],
    name: 'SafeERC20FailedOperation',
  },
] as const;

/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ShortStrings
/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const shortStringsAbi = [
  { type: 'error', inputs: [], name: 'InvalidShortString' },
  {
    type: 'error',
    inputs: [{ name: 'str', internalType: 'string', type: 'string' }],
    name: 'StringTooLong',
  },
] as const;

/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SmartInvoiceEscrow
/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const smartInvoiceEscrowAbi = [
  { type: 'constructor', inputs: [], stateMutability: 'nonpayable' },
  { type: 'receive', stateMutability: 'payable' },
  {
    type: 'function',
    inputs: [],
    name: 'MAX_TERMINATION_TIME',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'NUM_RULING_OPTIONS',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'RULINGS',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_milestones', internalType: 'uint256[]', type: 'uint256[]' },
      { name: '_details', internalType: 'string', type: 'string' },
    ],
    name: 'addMilestones',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_milestones', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    name: 'addMilestones',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'amounts',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'client',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'details',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'disputeId',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getAmounts',
    outputs: [{ name: '', internalType: 'uint256[]', type: 'uint256[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_provider', internalType: 'address', type: 'address' },
      { name: '_amounts', internalType: 'uint256[]', type: 'uint256[]' },
      { name: '_data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'init',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_details', internalType: 'string', type: 'string' }],
    name: 'lock',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'locked',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'milestone',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'provider',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_milestone', internalType: 'uint256', type: 'uint256' }],
    name: 'release',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'release',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_token', internalType: 'address', type: 'address' }],
    name: 'releaseTokens',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'released',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'resolutionRate',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_clientAward', internalType: 'uint256', type: 'uint256' },
      { name: '_providerAward', internalType: 'uint256', type: 'uint256' },
      { name: '_details', internalType: 'string', type: 'string' },
    ],
    name: 'resolve',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'resolver',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'resolverType',
    outputs: [
      { name: '', internalType: 'enum SmartInvoiceEscrow.ADR', type: 'uint8' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_disputeId', internalType: 'uint256', type: 'uint256' },
      { name: '_ruling', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'rule',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'terminationTime',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'token',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'total',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'verify',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'withdraw',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_token', internalType: 'address', type: 'address' }],
    name: 'withdrawTokens',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'wrappedNativeToken',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Deposit',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'details',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
    ],
    name: 'DetailsUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'version',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
    ],
    name: 'Initialized',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'details',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
    ],
    name: 'Lock',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'invoice',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'milestones',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
    ],
    name: 'MilestonesAdded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'milestone',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Release',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'resolver',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'clientAward',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'providerAward',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'resolutionFee',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'details',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
    ],
    name: 'Resolve',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'resolver',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'clientAward',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'providerAward',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'ruling',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Rule',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: '_arbitrator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: '_disputeID',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: '_ruling',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Ruling',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'client',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'invoice',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'Verified',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'balance',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Withdraw',
  },
  {
    type: 'error',
    inputs: [{ name: 'target', internalType: 'address', type: 'address' }],
    name: 'AddressEmptyCode',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'AddressInsufficientBalance',
  },
  { type: 'error', inputs: [], name: 'BalanceIsZero' },
  { type: 'error', inputs: [], name: 'DurationEnded' },
  { type: 'error', inputs: [], name: 'DurationTooLong' },
  { type: 'error', inputs: [], name: 'ExceedsMilestoneLimit' },
  { type: 'error', inputs: [], name: 'FailedInnerCall' },
  { type: 'error', inputs: [], name: 'IncorrectDisputeId' },
  { type: 'error', inputs: [], name: 'InsufficientBalance' },
  { type: 'error', inputs: [], name: 'InvalidArbitratorResolver' },
  { type: 'error', inputs: [], name: 'InvalidClient' },
  { type: 'error', inputs: [], name: 'InvalidIndividualResolver' },
  { type: 'error', inputs: [], name: 'InvalidInitialization' },
  { type: 'error', inputs: [], name: 'InvalidMilestone' },
  { type: 'error', inputs: [], name: 'InvalidProvider' },
  { type: 'error', inputs: [], name: 'InvalidResolutionRate' },
  { type: 'error', inputs: [], name: 'InvalidResolver' },
  { type: 'error', inputs: [], name: 'InvalidResolverType' },
  { type: 'error', inputs: [], name: 'InvalidRuling' },
  { type: 'error', inputs: [], name: 'InvalidToken' },
  { type: 'error', inputs: [], name: 'InvalidWrappedNativeToken' },
  { type: 'error', inputs: [], name: 'Locked' },
  { type: 'error', inputs: [], name: 'NoMilestones' },
  { type: 'error', inputs: [], name: 'NotClient' },
  { type: 'error', inputs: [], name: 'NotInitializing' },
  { type: 'error', inputs: [], name: 'NotParty' },
  { type: 'error', inputs: [], name: 'NotProvider' },
  { type: 'error', inputs: [], name: 'NotResolver' },
  { type: 'error', inputs: [], name: 'ReentrancyGuardReentrantCall' },
  { type: 'error', inputs: [], name: 'ResolutionMismatch' },
  {
    type: 'error',
    inputs: [{ name: 'token', internalType: 'address', type: 'address' }],
    name: 'SafeERC20FailedOperation',
  },
  { type: 'error', inputs: [], name: 'Terminated' },
] as const;

/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SmartInvoiceFactory
/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const smartInvoiceFactoryAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: '_wrappedNativeToken', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'ADMIN',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'DEFAULT_ADMIN_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_type', internalType: 'bytes32', type: 'bytes32' },
      { name: '_implementation', internalType: 'address', type: 'address' },
    ],
    name: 'addImplementation',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_recipient', internalType: 'address', type: 'address' },
      { name: '_amounts', internalType: 'uint256[]', type: 'uint256[]' },
      { name: '_data', internalType: 'bytes', type: 'bytes' },
      { name: '_type', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'create',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_recipient', internalType: 'address', type: 'address' },
      { name: '_amounts', internalType: 'uint256[]', type: 'uint256[]' },
      { name: '_data', internalType: 'bytes', type: 'bytes' },
      { name: '_type', internalType: 'bytes32', type: 'bytes32' },
      { name: '_salt', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'createDeterministic',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    name: 'currentVersions',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_implementationType', internalType: 'bytes32', type: 'bytes32' },
      {
        name: '_implementationVersion',
        internalType: 'uint256',
        type: 'uint256',
      },
    ],
    name: 'getImplementation',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'index', internalType: 'uint256', type: 'uint256' }],
    name: 'getInvoiceAddress',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'role', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getRoleAdmin',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'grantRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'hasRole',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'bytes32', type: 'bytes32' },
      { name: '', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'implementations',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'invoiceCount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_type', internalType: 'bytes32', type: 'bytes32' },
      { name: '_salt', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'predictDeterministicAddress',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'callerConfirmation', internalType: 'address', type: 'address' },
    ],
    name: 'renounceRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_resolver', internalType: 'address', type: 'address' }],
    name: 'resolutionRateOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'resolutionRates',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'revokeRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_resolutionRate', internalType: 'uint256', type: 'uint256' },
      { name: '_details', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'updateResolutionRate',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'wrappedNativeToken',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'invoiceType',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'version',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'implementation',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'AddImplementation',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'invoiceId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'invoiceAddress',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'amounts',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
      {
        name: 'invoiceType',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'version',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'LogNewInvoice',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'previousAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'newAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
    ],
    name: 'RoleAdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleGranted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleRevoked',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [],
    name: 'SmartInvoiceFactoryInit',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'resolver',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'resolutionRate',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'details',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
    ],
    name: 'UpdateResolutionRate',
  },
  { type: 'error', inputs: [], name: 'AccessControlBadConfirmation' },
  {
    type: 'error',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'neededRole', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'AccessControlUnauthorizedAccount',
  },
  { type: 'error', inputs: [], name: 'ERC1167FailedCreateClone' },
  { type: 'error', inputs: [], name: 'ImplementationDoesNotExist' },
  { type: 'error', inputs: [], name: 'InvalidWrappedNativeToken' },
  { type: 'error', inputs: [], name: 'ZeroAddressImplementation' },
] as const;

/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SmartInvoiceUpdatable
/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const smartInvoiceUpdatableAbi = [
  { type: 'receive', stateMutability: 'payable' },
  {
    type: 'function',
    inputs: [],
    name: 'MAX_TERMINATION_TIME',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'NUM_RULING_OPTIONS',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'RULINGS',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_milestones', internalType: 'uint256[]', type: 'uint256[]' },
      { name: '_details', internalType: 'string', type: 'string' },
    ],
    name: 'addMilestones',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_milestones', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    name: 'addMilestones',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'amounts',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'client',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'details',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'disputeId',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getAmounts',
    outputs: [{ name: '', internalType: 'uint256[]', type: 'uint256[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_provider', internalType: 'address', type: 'address' },
      { name: '_amounts', internalType: 'uint256[]', type: 'uint256[]' },
      { name: '_data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'init',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_details', internalType: 'string', type: 'string' }],
    name: 'lock',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'locked',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'milestone',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'provider',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'providerReceiver',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_milestone', internalType: 'uint256', type: 'uint256' }],
    name: 'release',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'release',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_token', internalType: 'address', type: 'address' }],
    name: 'releaseTokens',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'released',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'resolutionRate',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_clientAward', internalType: 'uint256', type: 'uint256' },
      { name: '_providerAward', internalType: 'uint256', type: 'uint256' },
      { name: '_details', internalType: 'string', type: 'string' },
    ],
    name: 'resolve',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'resolver',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'resolverType',
    outputs: [
      { name: '', internalType: 'enum SmartInvoiceEscrow.ADR', type: 'uint8' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_disputeId', internalType: 'uint256', type: 'uint256' },
      { name: '_ruling', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'rule',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'terminationTime',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'token',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'total',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_client', internalType: 'address', type: 'address' }],
    name: 'updateClient',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_provider', internalType: 'address', type: 'address' }],
    name: 'updateProvider',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_providerReceiver', internalType: 'address', type: 'address' },
    ],
    name: 'updateProviderReceiver',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'verify',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'withdraw',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_token', internalType: 'address', type: 'address' }],
    name: 'withdrawTokens',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'wrappedNativeToken',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Deposit',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'details',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
    ],
    name: 'DetailsUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'version',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
    ],
    name: 'Initialized',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'details',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
    ],
    name: 'Lock',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'invoice',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'milestones',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
    ],
    name: 'MilestonesAdded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'milestone',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Release',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'resolver',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'clientAward',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'providerAward',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'resolutionFee',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'details',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
    ],
    name: 'Resolve',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'resolver',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'clientAward',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'providerAward',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'ruling',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Rule',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: '_arbitrator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: '_disputeID',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: '_ruling',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Ruling',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'client',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'UpdatedClient',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'provider',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'UpdatedProvider',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'providerReceiver',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'UpdatedProviderReceiver',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'client',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'invoice',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'Verified',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'balance',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Withdraw',
  },
  {
    type: 'error',
    inputs: [{ name: 'target', internalType: 'address', type: 'address' }],
    name: 'AddressEmptyCode',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'AddressInsufficientBalance',
  },
  { type: 'error', inputs: [], name: 'BalanceIsZero' },
  { type: 'error', inputs: [], name: 'DurationEnded' },
  { type: 'error', inputs: [], name: 'DurationTooLong' },
  { type: 'error', inputs: [], name: 'ExceedsMilestoneLimit' },
  { type: 'error', inputs: [], name: 'FailedInnerCall' },
  { type: 'error', inputs: [], name: 'IncorrectDisputeId' },
  { type: 'error', inputs: [], name: 'InsufficientBalance' },
  { type: 'error', inputs: [], name: 'InvalidArbitratorResolver' },
  { type: 'error', inputs: [], name: 'InvalidClient' },
  { type: 'error', inputs: [], name: 'InvalidIndividualResolver' },
  { type: 'error', inputs: [], name: 'InvalidInitialization' },
  { type: 'error', inputs: [], name: 'InvalidMilestone' },
  { type: 'error', inputs: [], name: 'InvalidProvider' },
  { type: 'error', inputs: [], name: 'InvalidProviderReceiver' },
  { type: 'error', inputs: [], name: 'InvalidResolutionRate' },
  { type: 'error', inputs: [], name: 'InvalidResolver' },
  { type: 'error', inputs: [], name: 'InvalidResolverType' },
  { type: 'error', inputs: [], name: 'InvalidRuling' },
  { type: 'error', inputs: [], name: 'InvalidToken' },
  { type: 'error', inputs: [], name: 'InvalidWrappedNativeToken' },
  { type: 'error', inputs: [], name: 'Locked' },
  { type: 'error', inputs: [], name: 'NoMilestones' },
  { type: 'error', inputs: [], name: 'NotClient' },
  { type: 'error', inputs: [], name: 'NotInitializing' },
  { type: 'error', inputs: [], name: 'NotParty' },
  { type: 'error', inputs: [], name: 'NotProvider' },
  { type: 'error', inputs: [], name: 'NotResolver' },
  { type: 'error', inputs: [], name: 'ReentrancyGuardReentrantCall' },
  { type: 'error', inputs: [], name: 'ResolutionMismatch' },
  {
    type: 'error',
    inputs: [{ name: 'token', internalType: 'address', type: 'address' }],
    name: 'SafeERC20FailedOperation',
  },
  { type: 'error', inputs: [], name: 'Terminated' },
] as const;

/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Strings
/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const stringsAbi = [
  {
    type: 'error',
    inputs: [
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'length', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'StringsInsufficientHexLength',
  },
] as const;

/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link accessControlAbi}__
 */
export const useReadAccessControl = /* #__PURE__ */ createUseReadContract({
  abi: accessControlAbi,
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link accessControlAbi}__ and `functionName` set to `"DEFAULT_ADMIN_ROLE"`
 */
export const useReadAccessControlDefaultAdminRole =
  /* #__PURE__ */ createUseReadContract({
    abi: accessControlAbi,
    functionName: 'DEFAULT_ADMIN_ROLE',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link accessControlAbi}__ and `functionName` set to `"getRoleAdmin"`
 */
export const useReadAccessControlGetRoleAdmin =
  /* #__PURE__ */ createUseReadContract({
    abi: accessControlAbi,
    functionName: 'getRoleAdmin',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link accessControlAbi}__ and `functionName` set to `"hasRole"`
 */
export const useReadAccessControlHasRole =
  /* #__PURE__ */ createUseReadContract({
    abi: accessControlAbi,
    functionName: 'hasRole',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link accessControlAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadAccessControlSupportsInterface =
  /* #__PURE__ */ createUseReadContract({
    abi: accessControlAbi,
    functionName: 'supportsInterface',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link accessControlAbi}__
 */
export const useWriteAccessControl = /* #__PURE__ */ createUseWriteContract({
  abi: accessControlAbi,
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link accessControlAbi}__ and `functionName` set to `"grantRole"`
 */
export const useWriteAccessControlGrantRole =
  /* #__PURE__ */ createUseWriteContract({
    abi: accessControlAbi,
    functionName: 'grantRole',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link accessControlAbi}__ and `functionName` set to `"renounceRole"`
 */
export const useWriteAccessControlRenounceRole =
  /* #__PURE__ */ createUseWriteContract({
    abi: accessControlAbi,
    functionName: 'renounceRole',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link accessControlAbi}__ and `functionName` set to `"revokeRole"`
 */
export const useWriteAccessControlRevokeRole =
  /* #__PURE__ */ createUseWriteContract({
    abi: accessControlAbi,
    functionName: 'revokeRole',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link accessControlAbi}__
 */
export const useSimulateAccessControl =
  /* #__PURE__ */ createUseSimulateContract({ abi: accessControlAbi });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link accessControlAbi}__ and `functionName` set to `"grantRole"`
 */
export const useSimulateAccessControlGrantRole =
  /* #__PURE__ */ createUseSimulateContract({
    abi: accessControlAbi,
    functionName: 'grantRole',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link accessControlAbi}__ and `functionName` set to `"renounceRole"`
 */
export const useSimulateAccessControlRenounceRole =
  /* #__PURE__ */ createUseSimulateContract({
    abi: accessControlAbi,
    functionName: 'renounceRole',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link accessControlAbi}__ and `functionName` set to `"revokeRole"`
 */
export const useSimulateAccessControlRevokeRole =
  /* #__PURE__ */ createUseSimulateContract({
    abi: accessControlAbi,
    functionName: 'revokeRole',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link accessControlAbi}__
 */
export const useWatchAccessControlEvent =
  /* #__PURE__ */ createUseWatchContractEvent({ abi: accessControlAbi });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link accessControlAbi}__ and `eventName` set to `"RoleAdminChanged"`
 */
export const useWatchAccessControlRoleAdminChangedEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: accessControlAbi,
    eventName: 'RoleAdminChanged',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link accessControlAbi}__ and `eventName` set to `"RoleGranted"`
 */
export const useWatchAccessControlRoleGrantedEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: accessControlAbi,
    eventName: 'RoleGranted',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link accessControlAbi}__ and `eventName` set to `"RoleRevoked"`
 */
export const useWatchAccessControlRoleRevokedEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: accessControlAbi,
    eventName: 'RoleRevoked',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link eip712Abi}__
 */
export const useReadEip712 = /* #__PURE__ */ createUseReadContract({
  abi: eip712Abi,
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link eip712Abi}__ and `functionName` set to `"eip712Domain"`
 */
export const useReadEip712Eip712Domain = /* #__PURE__ */ createUseReadContract({
  abi: eip712Abi,
  functionName: 'eip712Domain',
});

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link eip712Abi}__
 */
export const useWatchEip712Event = /* #__PURE__ */ createUseWatchContractEvent({
  abi: eip712Abi,
});

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link eip712Abi}__ and `eventName` set to `"EIP712DomainChanged"`
 */
export const useWatchEip712Eip712DomainChangedEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: eip712Abi,
    eventName: 'EIP712DomainChanged',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc1155Abi}__
 */
export const useReadErc1155 = /* #__PURE__ */ createUseReadContract({
  abi: erc1155Abi,
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc1155Abi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadErc1155BalanceOf = /* #__PURE__ */ createUseReadContract({
  abi: erc1155Abi,
  functionName: 'balanceOf',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc1155Abi}__ and `functionName` set to `"balanceOfBatch"`
 */
export const useReadErc1155BalanceOfBatch =
  /* #__PURE__ */ createUseReadContract({
    abi: erc1155Abi,
    functionName: 'balanceOfBatch',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc1155Abi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const useReadErc1155IsApprovedForAll =
  /* #__PURE__ */ createUseReadContract({
    abi: erc1155Abi,
    functionName: 'isApprovedForAll',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc1155Abi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadErc1155SupportsInterface =
  /* #__PURE__ */ createUseReadContract({
    abi: erc1155Abi,
    functionName: 'supportsInterface',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc1155Abi}__ and `functionName` set to `"uri"`
 */
export const useReadErc1155Uri = /* #__PURE__ */ createUseReadContract({
  abi: erc1155Abi,
  functionName: 'uri',
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc1155Abi}__
 */
export const useWriteErc1155 = /* #__PURE__ */ createUseWriteContract({
  abi: erc1155Abi,
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc1155Abi}__ and `functionName` set to `"safeBatchTransferFrom"`
 */
export const useWriteErc1155SafeBatchTransferFrom =
  /* #__PURE__ */ createUseWriteContract({
    abi: erc1155Abi,
    functionName: 'safeBatchTransferFrom',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc1155Abi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useWriteErc1155SafeTransferFrom =
  /* #__PURE__ */ createUseWriteContract({
    abi: erc1155Abi,
    functionName: 'safeTransferFrom',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc1155Abi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useWriteErc1155SetApprovalForAll =
  /* #__PURE__ */ createUseWriteContract({
    abi: erc1155Abi,
    functionName: 'setApprovalForAll',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc1155Abi}__
 */
export const useSimulateErc1155 = /* #__PURE__ */ createUseSimulateContract({
  abi: erc1155Abi,
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc1155Abi}__ and `functionName` set to `"safeBatchTransferFrom"`
 */
export const useSimulateErc1155SafeBatchTransferFrom =
  /* #__PURE__ */ createUseSimulateContract({
    abi: erc1155Abi,
    functionName: 'safeBatchTransferFrom',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc1155Abi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useSimulateErc1155SafeTransferFrom =
  /* #__PURE__ */ createUseSimulateContract({
    abi: erc1155Abi,
    functionName: 'safeTransferFrom',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc1155Abi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useSimulateErc1155SetApprovalForAll =
  /* #__PURE__ */ createUseSimulateContract({
    abi: erc1155Abi,
    functionName: 'setApprovalForAll',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc1155Abi}__
 */
export const useWatchErc1155Event = /* #__PURE__ */ createUseWatchContractEvent(
  {
    abi: erc1155Abi,
  },
);

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc1155Abi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const useWatchErc1155ApprovalForAllEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: erc1155Abi,
    eventName: 'ApprovalForAll',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc1155Abi}__ and `eventName` set to `"TransferBatch"`
 */
export const useWatchErc1155TransferBatchEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: erc1155Abi,
    eventName: 'TransferBatch',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc1155Abi}__ and `eventName` set to `"TransferSingle"`
 */
export const useWatchErc1155TransferSingleEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: erc1155Abi,
    eventName: 'TransferSingle',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc1155Abi}__ and `eventName` set to `"URI"`
 */
export const useWatchErc1155UriEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: erc1155Abi,
    eventName: 'URI',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc165Abi}__
 */
export const useReadErc165 = /* #__PURE__ */ createUseReadContract({
  abi: erc165Abi,
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc165Abi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadErc165SupportsInterface =
  /* #__PURE__ */ createUseReadContract({
    abi: erc165Abi,
    functionName: 'supportsInterface',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const useReadErc20 = /* #__PURE__ */ createUseReadContract({
  abi: erc20Abi,
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"allowance"`
 */
export const useReadErc20Allowance = /* #__PURE__ */ createUseReadContract({
  abi: erc20Abi,
  functionName: 'allowance',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadErc20BalanceOf = /* #__PURE__ */ createUseReadContract({
  abi: erc20Abi,
  functionName: 'balanceOf',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"decimals"`
 */
export const useReadErc20Decimals = /* #__PURE__ */ createUseReadContract({
  abi: erc20Abi,
  functionName: 'decimals',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"name"`
 */
export const useReadErc20Name = /* #__PURE__ */ createUseReadContract({
  abi: erc20Abi,
  functionName: 'name',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"symbol"`
 */
export const useReadErc20Symbol = /* #__PURE__ */ createUseReadContract({
  abi: erc20Abi,
  functionName: 'symbol',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadErc20TotalSupply = /* #__PURE__ */ createUseReadContract({
  abi: erc20Abi,
  functionName: 'totalSupply',
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const useWriteErc20 = /* #__PURE__ */ createUseWriteContract({
  abi: erc20Abi,
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"approve"`
 */
export const useWriteErc20Approve = /* #__PURE__ */ createUseWriteContract({
  abi: erc20Abi,
  functionName: 'approve',
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transfer"`
 */
export const useWriteErc20Transfer = /* #__PURE__ */ createUseWriteContract({
  abi: erc20Abi,
  functionName: 'transfer',
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteErc20TransferFrom = /* #__PURE__ */ createUseWriteContract(
  {
    abi: erc20Abi,
    functionName: 'transferFrom',
  },
);

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const useSimulateErc20 = /* #__PURE__ */ createUseSimulateContract({
  abi: erc20Abi,
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"approve"`
 */
export const useSimulateErc20Approve =
  /* #__PURE__ */ createUseSimulateContract({
    abi: erc20Abi,
    functionName: 'approve',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateErc20Transfer =
  /* #__PURE__ */ createUseSimulateContract({
    abi: erc20Abi,
    functionName: 'transfer',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateErc20TransferFrom =
  /* #__PURE__ */ createUseSimulateContract({
    abi: erc20Abi,
    functionName: 'transferFrom',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20Abi}__
 */
export const useWatchErc20Event = /* #__PURE__ */ createUseWatchContractEvent({
  abi: erc20Abi,
});

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20Abi}__ and `eventName` set to `"Approval"`
 */
export const useWatchErc20ApprovalEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: erc20Abi,
    eventName: 'Approval',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20Abi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchErc20TransferEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: erc20Abi,
    eventName: 'Transfer',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link gigManagerAbi}__
 */
export const useReadGigManager = /* #__PURE__ */ createUseReadContract({
  abi: gigManagerAbi,
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link gigManagerAbi}__ and `functionName` set to `"ONE_YEAR"`
 */
export const useReadGigManagerOneYear = /* #__PURE__ */ createUseReadContract({
  abi: gigManagerAbi,
  functionName: 'ONE_YEAR',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link gigManagerAbi}__ and `functionName` set to `"eip712Domain"`
 */
export const useReadGigManagerEip712Domain =
  /* #__PURE__ */ createUseReadContract({
    abi: gigManagerAbi,
    functionName: 'eip712Domain',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link gigManagerAbi}__ and `functionName` set to `"escrowFactory"`
 */
export const useReadGigManagerEscrowFactory =
  /* #__PURE__ */ createUseReadContract({
    abi: gigManagerAbi,
    functionName: 'escrowFactory',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link gigManagerAbi}__ and `functionName` set to `"escrowNeedsVerification"`
 */
export const useReadGigManagerEscrowNeedsVerification =
  /* #__PURE__ */ createUseReadContract({
    abi: gigManagerAbi,
    functionName: 'escrowNeedsVerification',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link gigManagerAbi}__ and `functionName` set to `"escrowResolver"`
 */
export const useReadGigManagerEscrowResolver =
  /* #__PURE__ */ createUseReadContract({
    abi: gigManagerAbi,
    functionName: 'escrowResolver',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link gigManagerAbi}__ and `functionName` set to `"escrowResolverType"`
 */
export const useReadGigManagerEscrowResolverType =
  /* #__PURE__ */ createUseReadContract({
    abi: gigManagerAbi,
    functionName: 'escrowResolverType',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link gigManagerAbi}__ and `functionName` set to `"escrowType"`
 */
export const useReadGigManagerEscrowType =
  /* #__PURE__ */ createUseReadContract({
    abi: gigManagerAbi,
    functionName: 'escrowType',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link gigManagerAbi}__ and `functionName` set to `"getEscrow"`
 */
export const useReadGigManagerGetEscrow = /* #__PURE__ */ createUseReadContract(
  {
    abi: gigManagerAbi,
    functionName: 'getEscrow',
  },
);

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link gigManagerAbi}__ and `functionName` set to `"getGig"`
 */
export const useReadGigManagerGetGig = /* #__PURE__ */ createUseReadContract({
  abi: gigManagerAbi,
  functionName: 'getGig',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link gigManagerAbi}__ and `functionName` set to `"getProposal"`
 */
export const useReadGigManagerGetProposal =
  /* #__PURE__ */ createUseReadContract({
    abi: gigManagerAbi,
    functionName: 'getProposal',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link gigManagerAbi}__ and `functionName` set to `"gigCount"`
 */
export const useReadGigManagerGigCount = /* #__PURE__ */ createUseReadContract({
  abi: gigManagerAbi,
  functionName: 'gigCount',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link gigManagerAbi}__ and `functionName` set to `"proposalCount"`
 */
export const useReadGigManagerProposalCount =
  /* #__PURE__ */ createUseReadContract({
    abi: gigManagerAbi,
    functionName: 'proposalCount',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link gigManagerAbi}__ and `functionName` set to `"wrappedNativeToken"`
 */
export const useReadGigManagerWrappedNativeToken =
  /* #__PURE__ */ createUseReadContract({
    abi: gigManagerAbi,
    functionName: 'wrappedNativeToken',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link gigManagerAbi}__
 */
export const useWriteGigManager = /* #__PURE__ */ createUseWriteContract({
  abi: gigManagerAbi,
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link gigManagerAbi}__ and `functionName` set to `"acceptProposal"`
 */
export const useWriteGigManagerAcceptProposal =
  /* #__PURE__ */ createUseWriteContract({
    abi: gigManagerAbi,
    functionName: 'acceptProposal',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link gigManagerAbi}__ and `functionName` set to `"acceptProposalWithSignatures"`
 */
export const useWriteGigManagerAcceptProposalWithSignatures =
  /* #__PURE__ */ createUseWriteContract({
    abi: gigManagerAbi,
    functionName: 'acceptProposalWithSignatures',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link gigManagerAbi}__ and `functionName` set to `"createGig"`
 */
export const useWriteGigManagerCreateGig =
  /* #__PURE__ */ createUseWriteContract({
    abi: gigManagerAbi,
    functionName: 'createGig',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link gigManagerAbi}__ and `functionName` set to `"createProposal"`
 */
export const useWriteGigManagerCreateProposal =
  /* #__PURE__ */ createUseWriteContract({
    abi: gigManagerAbi,
    functionName: 'createProposal',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link gigManagerAbi}__ and `functionName` set to `"editProposal"`
 */
export const useWriteGigManagerEditProposal =
  /* #__PURE__ */ createUseWriteContract({
    abi: gigManagerAbi,
    functionName: 'editProposal',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link gigManagerAbi}__
 */
export const useSimulateGigManager = /* #__PURE__ */ createUseSimulateContract({
  abi: gigManagerAbi,
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link gigManagerAbi}__ and `functionName` set to `"acceptProposal"`
 */
export const useSimulateGigManagerAcceptProposal =
  /* #__PURE__ */ createUseSimulateContract({
    abi: gigManagerAbi,
    functionName: 'acceptProposal',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link gigManagerAbi}__ and `functionName` set to `"acceptProposalWithSignatures"`
 */
export const useSimulateGigManagerAcceptProposalWithSignatures =
  /* #__PURE__ */ createUseSimulateContract({
    abi: gigManagerAbi,
    functionName: 'acceptProposalWithSignatures',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link gigManagerAbi}__ and `functionName` set to `"createGig"`
 */
export const useSimulateGigManagerCreateGig =
  /* #__PURE__ */ createUseSimulateContract({
    abi: gigManagerAbi,
    functionName: 'createGig',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link gigManagerAbi}__ and `functionName` set to `"createProposal"`
 */
export const useSimulateGigManagerCreateProposal =
  /* #__PURE__ */ createUseSimulateContract({
    abi: gigManagerAbi,
    functionName: 'createProposal',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link gigManagerAbi}__ and `functionName` set to `"editProposal"`
 */
export const useSimulateGigManagerEditProposal =
  /* #__PURE__ */ createUseSimulateContract({
    abi: gigManagerAbi,
    functionName: 'editProposal',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link gigManagerAbi}__
 */
export const useWatchGigManagerEvent =
  /* #__PURE__ */ createUseWatchContractEvent({ abi: gigManagerAbi });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link gigManagerAbi}__ and `eventName` set to `"EIP712DomainChanged"`
 */
export const useWatchGigManagerEip712DomainChangedEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: gigManagerAbi,
    eventName: 'EIP712DomainChanged',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link gigManagerAbi}__ and `eventName` set to `"GigCreated"`
 */
export const useWatchGigManagerGigCreatedEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: gigManagerAbi,
    eventName: 'GigCreated',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link gigManagerAbi}__ and `eventName` set to `"GigManagerInit"`
 */
export const useWatchGigManagerGigManagerInitEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: gigManagerAbi,
    eventName: 'GigManagerInit',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link gigManagerAbi}__ and `eventName` set to `"ProposalAccepted"`
 */
export const useWatchGigManagerProposalAcceptedEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: gigManagerAbi,
    eventName: 'ProposalAccepted',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link gigManagerAbi}__ and `eventName` set to `"ProposalCreated"`
 */
export const useWatchGigManagerProposalCreatedEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: gigManagerAbi,
    eventName: 'ProposalCreated',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link gigManagerAbi}__ and `eventName` set to `"ProposalEdited"`
 */
export const useWatchGigManagerProposalEditedEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: gigManagerAbi,
    eventName: 'ProposalEdited',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iAccessControlAbi}__
 */
export const useReadIAccessControl = /* #__PURE__ */ createUseReadContract({
  abi: iAccessControlAbi,
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iAccessControlAbi}__ and `functionName` set to `"getRoleAdmin"`
 */
export const useReadIAccessControlGetRoleAdmin =
  /* #__PURE__ */ createUseReadContract({
    abi: iAccessControlAbi,
    functionName: 'getRoleAdmin',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iAccessControlAbi}__ and `functionName` set to `"hasRole"`
 */
export const useReadIAccessControlHasRole =
  /* #__PURE__ */ createUseReadContract({
    abi: iAccessControlAbi,
    functionName: 'hasRole',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iAccessControlAbi}__
 */
export const useWriteIAccessControl = /* #__PURE__ */ createUseWriteContract({
  abi: iAccessControlAbi,
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iAccessControlAbi}__ and `functionName` set to `"grantRole"`
 */
export const useWriteIAccessControlGrantRole =
  /* #__PURE__ */ createUseWriteContract({
    abi: iAccessControlAbi,
    functionName: 'grantRole',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iAccessControlAbi}__ and `functionName` set to `"renounceRole"`
 */
export const useWriteIAccessControlRenounceRole =
  /* #__PURE__ */ createUseWriteContract({
    abi: iAccessControlAbi,
    functionName: 'renounceRole',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iAccessControlAbi}__ and `functionName` set to `"revokeRole"`
 */
export const useWriteIAccessControlRevokeRole =
  /* #__PURE__ */ createUseWriteContract({
    abi: iAccessControlAbi,
    functionName: 'revokeRole',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iAccessControlAbi}__
 */
export const useSimulateIAccessControl =
  /* #__PURE__ */ createUseSimulateContract({ abi: iAccessControlAbi });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iAccessControlAbi}__ and `functionName` set to `"grantRole"`
 */
export const useSimulateIAccessControlGrantRole =
  /* #__PURE__ */ createUseSimulateContract({
    abi: iAccessControlAbi,
    functionName: 'grantRole',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iAccessControlAbi}__ and `functionName` set to `"renounceRole"`
 */
export const useSimulateIAccessControlRenounceRole =
  /* #__PURE__ */ createUseSimulateContract({
    abi: iAccessControlAbi,
    functionName: 'renounceRole',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iAccessControlAbi}__ and `functionName` set to `"revokeRole"`
 */
export const useSimulateIAccessControlRevokeRole =
  /* #__PURE__ */ createUseSimulateContract({
    abi: iAccessControlAbi,
    functionName: 'revokeRole',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iAccessControlAbi}__
 */
export const useWatchIAccessControlEvent =
  /* #__PURE__ */ createUseWatchContractEvent({ abi: iAccessControlAbi });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iAccessControlAbi}__ and `eventName` set to `"RoleAdminChanged"`
 */
export const useWatchIAccessControlRoleAdminChangedEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: iAccessControlAbi,
    eventName: 'RoleAdminChanged',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iAccessControlAbi}__ and `eventName` set to `"RoleGranted"`
 */
export const useWatchIAccessControlRoleGrantedEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: iAccessControlAbi,
    eventName: 'RoleGranted',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iAccessControlAbi}__ and `eventName` set to `"RoleRevoked"`
 */
export const useWatchIAccessControlRoleRevokedEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: iAccessControlAbi,
    eventName: 'RoleRevoked',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iArbitrableAbi}__
 */
export const useWriteIArbitrable = /* #__PURE__ */ createUseWriteContract({
  abi: iArbitrableAbi,
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iArbitrableAbi}__ and `functionName` set to `"rule"`
 */
export const useWriteIArbitrableRule = /* #__PURE__ */ createUseWriteContract({
  abi: iArbitrableAbi,
  functionName: 'rule',
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iArbitrableAbi}__
 */
export const useSimulateIArbitrable = /* #__PURE__ */ createUseSimulateContract(
  {
    abi: iArbitrableAbi,
  },
);

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iArbitrableAbi}__ and `functionName` set to `"rule"`
 */
export const useSimulateIArbitrableRule =
  /* #__PURE__ */ createUseSimulateContract({
    abi: iArbitrableAbi,
    functionName: 'rule',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iArbitrableAbi}__
 */
export const useWatchIArbitrableEvent =
  /* #__PURE__ */ createUseWatchContractEvent({ abi: iArbitrableAbi });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iArbitrableAbi}__ and `eventName` set to `"Ruling"`
 */
export const useWatchIArbitrableRulingEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: iArbitrableAbi,
    eventName: 'Ruling',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iArbitratorAbi}__
 */
export const useReadIArbitrator = /* #__PURE__ */ createUseReadContract({
  abi: iArbitratorAbi,
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iArbitratorAbi}__ and `functionName` set to `"appealCost"`
 */
export const useReadIArbitratorAppealCost =
  /* #__PURE__ */ createUseReadContract({
    abi: iArbitratorAbi,
    functionName: 'appealCost',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iArbitratorAbi}__ and `functionName` set to `"appealPeriod"`
 */
export const useReadIArbitratorAppealPeriod =
  /* #__PURE__ */ createUseReadContract({
    abi: iArbitratorAbi,
    functionName: 'appealPeriod',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iArbitratorAbi}__ and `functionName` set to `"arbitrationCost"`
 */
export const useReadIArbitratorArbitrationCost =
  /* #__PURE__ */ createUseReadContract({
    abi: iArbitratorAbi,
    functionName: 'arbitrationCost',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iArbitratorAbi}__ and `functionName` set to `"currentRuling"`
 */
export const useReadIArbitratorCurrentRuling =
  /* #__PURE__ */ createUseReadContract({
    abi: iArbitratorAbi,
    functionName: 'currentRuling',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iArbitratorAbi}__ and `functionName` set to `"disputeStatus"`
 */
export const useReadIArbitratorDisputeStatus =
  /* #__PURE__ */ createUseReadContract({
    abi: iArbitratorAbi,
    functionName: 'disputeStatus',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iArbitratorAbi}__
 */
export const useWriteIArbitrator = /* #__PURE__ */ createUseWriteContract({
  abi: iArbitratorAbi,
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iArbitratorAbi}__ and `functionName` set to `"appeal"`
 */
export const useWriteIArbitratorAppeal = /* #__PURE__ */ createUseWriteContract(
  {
    abi: iArbitratorAbi,
    functionName: 'appeal',
  },
);

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iArbitratorAbi}__ and `functionName` set to `"createDispute"`
 */
export const useWriteIArbitratorCreateDispute =
  /* #__PURE__ */ createUseWriteContract({
    abi: iArbitratorAbi,
    functionName: 'createDispute',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iArbitratorAbi}__
 */
export const useSimulateIArbitrator = /* #__PURE__ */ createUseSimulateContract(
  {
    abi: iArbitratorAbi,
  },
);

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iArbitratorAbi}__ and `functionName` set to `"appeal"`
 */
export const useSimulateIArbitratorAppeal =
  /* #__PURE__ */ createUseSimulateContract({
    abi: iArbitratorAbi,
    functionName: 'appeal',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iArbitratorAbi}__ and `functionName` set to `"createDispute"`
 */
export const useSimulateIArbitratorCreateDispute =
  /* #__PURE__ */ createUseSimulateContract({
    abi: iArbitratorAbi,
    functionName: 'createDispute',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iArbitratorAbi}__
 */
export const useWatchIArbitratorEvent =
  /* #__PURE__ */ createUseWatchContractEvent({ abi: iArbitratorAbi });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iArbitratorAbi}__ and `eventName` set to `"AppealDecision"`
 */
export const useWatchIArbitratorAppealDecisionEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: iArbitratorAbi,
    eventName: 'AppealDecision',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iArbitratorAbi}__ and `eventName` set to `"AppealPossible"`
 */
export const useWatchIArbitratorAppealPossibleEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: iArbitratorAbi,
    eventName: 'AppealPossible',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iArbitratorAbi}__ and `eventName` set to `"DisputeCreation"`
 */
export const useWatchIArbitratorDisputeCreationEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: iArbitratorAbi,
    eventName: 'DisputeCreation',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc1155Abi}__
 */
export const useReadIerc1155 = /* #__PURE__ */ createUseReadContract({
  abi: ierc1155Abi,
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc1155Abi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadIerc1155BalanceOf = /* #__PURE__ */ createUseReadContract({
  abi: ierc1155Abi,
  functionName: 'balanceOf',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc1155Abi}__ and `functionName` set to `"balanceOfBatch"`
 */
export const useReadIerc1155BalanceOfBatch =
  /* #__PURE__ */ createUseReadContract({
    abi: ierc1155Abi,
    functionName: 'balanceOfBatch',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc1155Abi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const useReadIerc1155IsApprovedForAll =
  /* #__PURE__ */ createUseReadContract({
    abi: ierc1155Abi,
    functionName: 'isApprovedForAll',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc1155Abi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadIerc1155SupportsInterface =
  /* #__PURE__ */ createUseReadContract({
    abi: ierc1155Abi,
    functionName: 'supportsInterface',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc1155Abi}__
 */
export const useWriteIerc1155 = /* #__PURE__ */ createUseWriteContract({
  abi: ierc1155Abi,
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc1155Abi}__ and `functionName` set to `"safeBatchTransferFrom"`
 */
export const useWriteIerc1155SafeBatchTransferFrom =
  /* #__PURE__ */ createUseWriteContract({
    abi: ierc1155Abi,
    functionName: 'safeBatchTransferFrom',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc1155Abi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useWriteIerc1155SafeTransferFrom =
  /* #__PURE__ */ createUseWriteContract({
    abi: ierc1155Abi,
    functionName: 'safeTransferFrom',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc1155Abi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useWriteIerc1155SetApprovalForAll =
  /* #__PURE__ */ createUseWriteContract({
    abi: ierc1155Abi,
    functionName: 'setApprovalForAll',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc1155Abi}__
 */
export const useSimulateIerc1155 = /* #__PURE__ */ createUseSimulateContract({
  abi: ierc1155Abi,
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc1155Abi}__ and `functionName` set to `"safeBatchTransferFrom"`
 */
export const useSimulateIerc1155SafeBatchTransferFrom =
  /* #__PURE__ */ createUseSimulateContract({
    abi: ierc1155Abi,
    functionName: 'safeBatchTransferFrom',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc1155Abi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useSimulateIerc1155SafeTransferFrom =
  /* #__PURE__ */ createUseSimulateContract({
    abi: ierc1155Abi,
    functionName: 'safeTransferFrom',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc1155Abi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useSimulateIerc1155SetApprovalForAll =
  /* #__PURE__ */ createUseSimulateContract({
    abi: ierc1155Abi,
    functionName: 'setApprovalForAll',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc1155Abi}__
 */
export const useWatchIerc1155Event =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: ierc1155Abi,
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc1155Abi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const useWatchIerc1155ApprovalForAllEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: ierc1155Abi,
    eventName: 'ApprovalForAll',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc1155Abi}__ and `eventName` set to `"TransferBatch"`
 */
export const useWatchIerc1155TransferBatchEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: ierc1155Abi,
    eventName: 'TransferBatch',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc1155Abi}__ and `eventName` set to `"TransferSingle"`
 */
export const useWatchIerc1155TransferSingleEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: ierc1155Abi,
    eventName: 'TransferSingle',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc1155Abi}__ and `eventName` set to `"URI"`
 */
export const useWatchIerc1155UriEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: ierc1155Abi,
    eventName: 'URI',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc1155MetadataUriAbi}__
 */
export const useReadIerc1155MetadataUri = /* #__PURE__ */ createUseReadContract(
  {
    abi: ierc1155MetadataUriAbi,
  },
);

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc1155MetadataUriAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadIerc1155MetadataUriBalanceOf =
  /* #__PURE__ */ createUseReadContract({
    abi: ierc1155MetadataUriAbi,
    functionName: 'balanceOf',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc1155MetadataUriAbi}__ and `functionName` set to `"balanceOfBatch"`
 */
export const useReadIerc1155MetadataUriBalanceOfBatch =
  /* #__PURE__ */ createUseReadContract({
    abi: ierc1155MetadataUriAbi,
    functionName: 'balanceOfBatch',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc1155MetadataUriAbi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const useReadIerc1155MetadataUriIsApprovedForAll =
  /* #__PURE__ */ createUseReadContract({
    abi: ierc1155MetadataUriAbi,
    functionName: 'isApprovedForAll',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc1155MetadataUriAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadIerc1155MetadataUriSupportsInterface =
  /* #__PURE__ */ createUseReadContract({
    abi: ierc1155MetadataUriAbi,
    functionName: 'supportsInterface',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc1155MetadataUriAbi}__ and `functionName` set to `"uri"`
 */
export const useReadIerc1155MetadataUriUri =
  /* #__PURE__ */ createUseReadContract({
    abi: ierc1155MetadataUriAbi,
    functionName: 'uri',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc1155MetadataUriAbi}__
 */
export const useWriteIerc1155MetadataUri =
  /* #__PURE__ */ createUseWriteContract({ abi: ierc1155MetadataUriAbi });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc1155MetadataUriAbi}__ and `functionName` set to `"safeBatchTransferFrom"`
 */
export const useWriteIerc1155MetadataUriSafeBatchTransferFrom =
  /* #__PURE__ */ createUseWriteContract({
    abi: ierc1155MetadataUriAbi,
    functionName: 'safeBatchTransferFrom',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc1155MetadataUriAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useWriteIerc1155MetadataUriSafeTransferFrom =
  /* #__PURE__ */ createUseWriteContract({
    abi: ierc1155MetadataUriAbi,
    functionName: 'safeTransferFrom',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc1155MetadataUriAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useWriteIerc1155MetadataUriSetApprovalForAll =
  /* #__PURE__ */ createUseWriteContract({
    abi: ierc1155MetadataUriAbi,
    functionName: 'setApprovalForAll',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc1155MetadataUriAbi}__
 */
export const useSimulateIerc1155MetadataUri =
  /* #__PURE__ */ createUseSimulateContract({ abi: ierc1155MetadataUriAbi });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc1155MetadataUriAbi}__ and `functionName` set to `"safeBatchTransferFrom"`
 */
export const useSimulateIerc1155MetadataUriSafeBatchTransferFrom =
  /* #__PURE__ */ createUseSimulateContract({
    abi: ierc1155MetadataUriAbi,
    functionName: 'safeBatchTransferFrom',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc1155MetadataUriAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useSimulateIerc1155MetadataUriSafeTransferFrom =
  /* #__PURE__ */ createUseSimulateContract({
    abi: ierc1155MetadataUriAbi,
    functionName: 'safeTransferFrom',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc1155MetadataUriAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useSimulateIerc1155MetadataUriSetApprovalForAll =
  /* #__PURE__ */ createUseSimulateContract({
    abi: ierc1155MetadataUriAbi,
    functionName: 'setApprovalForAll',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc1155MetadataUriAbi}__
 */
export const useWatchIerc1155MetadataUriEvent =
  /* #__PURE__ */ createUseWatchContractEvent({ abi: ierc1155MetadataUriAbi });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc1155MetadataUriAbi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const useWatchIerc1155MetadataUriApprovalForAllEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: ierc1155MetadataUriAbi,
    eventName: 'ApprovalForAll',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc1155MetadataUriAbi}__ and `eventName` set to `"TransferBatch"`
 */
export const useWatchIerc1155MetadataUriTransferBatchEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: ierc1155MetadataUriAbi,
    eventName: 'TransferBatch',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc1155MetadataUriAbi}__ and `eventName` set to `"TransferSingle"`
 */
export const useWatchIerc1155MetadataUriTransferSingleEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: ierc1155MetadataUriAbi,
    eventName: 'TransferSingle',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc1155MetadataUriAbi}__ and `eventName` set to `"URI"`
 */
export const useWatchIerc1155MetadataUriUriEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: ierc1155MetadataUriAbi,
    eventName: 'URI',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc1155ReceiverAbi}__
 */
export const useReadIerc1155Receiver = /* #__PURE__ */ createUseReadContract({
  abi: ierc1155ReceiverAbi,
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc1155ReceiverAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadIerc1155ReceiverSupportsInterface =
  /* #__PURE__ */ createUseReadContract({
    abi: ierc1155ReceiverAbi,
    functionName: 'supportsInterface',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc1155ReceiverAbi}__
 */
export const useWriteIerc1155Receiver = /* #__PURE__ */ createUseWriteContract({
  abi: ierc1155ReceiverAbi,
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc1155ReceiverAbi}__ and `functionName` set to `"onERC1155BatchReceived"`
 */
export const useWriteIerc1155ReceiverOnErc1155BatchReceived =
  /* #__PURE__ */ createUseWriteContract({
    abi: ierc1155ReceiverAbi,
    functionName: 'onERC1155BatchReceived',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc1155ReceiverAbi}__ and `functionName` set to `"onERC1155Received"`
 */
export const useWriteIerc1155ReceiverOnErc1155Received =
  /* #__PURE__ */ createUseWriteContract({
    abi: ierc1155ReceiverAbi,
    functionName: 'onERC1155Received',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc1155ReceiverAbi}__
 */
export const useSimulateIerc1155Receiver =
  /* #__PURE__ */ createUseSimulateContract({ abi: ierc1155ReceiverAbi });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc1155ReceiverAbi}__ and `functionName` set to `"onERC1155BatchReceived"`
 */
export const useSimulateIerc1155ReceiverOnErc1155BatchReceived =
  /* #__PURE__ */ createUseSimulateContract({
    abi: ierc1155ReceiverAbi,
    functionName: 'onERC1155BatchReceived',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc1155ReceiverAbi}__ and `functionName` set to `"onERC1155Received"`
 */
export const useSimulateIerc1155ReceiverOnErc1155Received =
  /* #__PURE__ */ createUseSimulateContract({
    abi: ierc1155ReceiverAbi,
    functionName: 'onERC1155Received',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc1271Abi}__
 */
export const useReadIerc1271 = /* #__PURE__ */ createUseReadContract({
  abi: ierc1271Abi,
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc1271Abi}__ and `functionName` set to `"isValidSignature"`
 */
export const useReadIerc1271IsValidSignature =
  /* #__PURE__ */ createUseReadContract({
    abi: ierc1271Abi,
    functionName: 'isValidSignature',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20MetadataAbi}__
 */
export const useReadIerc20Metadata = /* #__PURE__ */ createUseReadContract({
  abi: ierc20MetadataAbi,
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"allowance"`
 */
export const useReadIerc20MetadataAllowance =
  /* #__PURE__ */ createUseReadContract({
    abi: ierc20MetadataAbi,
    functionName: 'allowance',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadIerc20MetadataBalanceOf =
  /* #__PURE__ */ createUseReadContract({
    abi: ierc20MetadataAbi,
    functionName: 'balanceOf',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"decimals"`
 */
export const useReadIerc20MetadataDecimals =
  /* #__PURE__ */ createUseReadContract({
    abi: ierc20MetadataAbi,
    functionName: 'decimals',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"name"`
 */
export const useReadIerc20MetadataName = /* #__PURE__ */ createUseReadContract({
  abi: ierc20MetadataAbi,
  functionName: 'name',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"symbol"`
 */
export const useReadIerc20MetadataSymbol =
  /* #__PURE__ */ createUseReadContract({
    abi: ierc20MetadataAbi,
    functionName: 'symbol',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadIerc20MetadataTotalSupply =
  /* #__PURE__ */ createUseReadContract({
    abi: ierc20MetadataAbi,
    functionName: 'totalSupply',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc20MetadataAbi}__
 */
export const useWriteIerc20Metadata = /* #__PURE__ */ createUseWriteContract({
  abi: ierc20MetadataAbi,
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"approve"`
 */
export const useWriteIerc20MetadataApprove =
  /* #__PURE__ */ createUseWriteContract({
    abi: ierc20MetadataAbi,
    functionName: 'approve',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"transfer"`
 */
export const useWriteIerc20MetadataTransfer =
  /* #__PURE__ */ createUseWriteContract({
    abi: ierc20MetadataAbi,
    functionName: 'transfer',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteIerc20MetadataTransferFrom =
  /* #__PURE__ */ createUseWriteContract({
    abi: ierc20MetadataAbi,
    functionName: 'transferFrom',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc20MetadataAbi}__
 */
export const useSimulateIerc20Metadata =
  /* #__PURE__ */ createUseSimulateContract({ abi: ierc20MetadataAbi });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"approve"`
 */
export const useSimulateIerc20MetadataApprove =
  /* #__PURE__ */ createUseSimulateContract({
    abi: ierc20MetadataAbi,
    functionName: 'approve',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateIerc20MetadataTransfer =
  /* #__PURE__ */ createUseSimulateContract({
    abi: ierc20MetadataAbi,
    functionName: 'transfer',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateIerc20MetadataTransferFrom =
  /* #__PURE__ */ createUseSimulateContract({
    abi: ierc20MetadataAbi,
    functionName: 'transferFrom',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc20MetadataAbi}__
 */
export const useWatchIerc20MetadataEvent =
  /* #__PURE__ */ createUseWatchContractEvent({ abi: ierc20MetadataAbi });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `eventName` set to `"Approval"`
 */
export const useWatchIerc20MetadataApprovalEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: ierc20MetadataAbi,
    eventName: 'Approval',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchIerc20MetadataTransferEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: ierc20MetadataAbi,
    eventName: 'Transfer',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20PermitAbi}__
 */
export const useReadIerc20Permit = /* #__PURE__ */ createUseReadContract({
  abi: ierc20PermitAbi,
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20PermitAbi}__ and `functionName` set to `"DOMAIN_SEPARATOR"`
 */
export const useReadIerc20PermitDomainSeparator =
  /* #__PURE__ */ createUseReadContract({
    abi: ierc20PermitAbi,
    functionName: 'DOMAIN_SEPARATOR',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20PermitAbi}__ and `functionName` set to `"nonces"`
 */
export const useReadIerc20PermitNonces = /* #__PURE__ */ createUseReadContract({
  abi: ierc20PermitAbi,
  functionName: 'nonces',
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc20PermitAbi}__
 */
export const useWriteIerc20Permit = /* #__PURE__ */ createUseWriteContract({
  abi: ierc20PermitAbi,
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc20PermitAbi}__ and `functionName` set to `"permit"`
 */
export const useWriteIerc20PermitPermit =
  /* #__PURE__ */ createUseWriteContract({
    abi: ierc20PermitAbi,
    functionName: 'permit',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc20PermitAbi}__
 */
export const useSimulateIerc20Permit =
  /* #__PURE__ */ createUseSimulateContract({
    abi: ierc20PermitAbi,
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc20PermitAbi}__ and `functionName` set to `"permit"`
 */
export const useSimulateIerc20PermitPermit =
  /* #__PURE__ */ createUseSimulateContract({
    abi: ierc20PermitAbi,
    functionName: 'permit',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20TokenAbi}__
 */
export const useReadIerc20Token = /* #__PURE__ */ createUseReadContract({
  abi: ierc20TokenAbi,
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20TokenAbi}__ and `functionName` set to `"DOMAIN_SEPARATOR"`
 */
export const useReadIerc20TokenDomainSeparator =
  /* #__PURE__ */ createUseReadContract({
    abi: ierc20TokenAbi,
    functionName: 'DOMAIN_SEPARATOR',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20TokenAbi}__ and `functionName` set to `"allowance"`
 */
export const useReadIerc20TokenAllowance =
  /* #__PURE__ */ createUseReadContract({
    abi: ierc20TokenAbi,
    functionName: 'allowance',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20TokenAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadIerc20TokenBalanceOf =
  /* #__PURE__ */ createUseReadContract({
    abi: ierc20TokenAbi,
    functionName: 'balanceOf',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20TokenAbi}__ and `functionName` set to `"nonces"`
 */
export const useReadIerc20TokenNonces = /* #__PURE__ */ createUseReadContract({
  abi: ierc20TokenAbi,
  functionName: 'nonces',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20TokenAbi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadIerc20TokenTotalSupply =
  /* #__PURE__ */ createUseReadContract({
    abi: ierc20TokenAbi,
    functionName: 'totalSupply',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc20TokenAbi}__
 */
export const useWriteIerc20Token = /* #__PURE__ */ createUseWriteContract({
  abi: ierc20TokenAbi,
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc20TokenAbi}__ and `functionName` set to `"approve"`
 */
export const useWriteIerc20TokenApprove =
  /* #__PURE__ */ createUseWriteContract({
    abi: ierc20TokenAbi,
    functionName: 'approve',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc20TokenAbi}__ and `functionName` set to `"permit"`
 */
export const useWriteIerc20TokenPermit = /* #__PURE__ */ createUseWriteContract(
  {
    abi: ierc20TokenAbi,
    functionName: 'permit',
  },
);

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc20TokenAbi}__ and `functionName` set to `"transfer"`
 */
export const useWriteIerc20TokenTransfer =
  /* #__PURE__ */ createUseWriteContract({
    abi: ierc20TokenAbi,
    functionName: 'transfer',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc20TokenAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteIerc20TokenTransferFrom =
  /* #__PURE__ */ createUseWriteContract({
    abi: ierc20TokenAbi,
    functionName: 'transferFrom',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc20TokenAbi}__
 */
export const useSimulateIerc20Token = /* #__PURE__ */ createUseSimulateContract(
  {
    abi: ierc20TokenAbi,
  },
);

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc20TokenAbi}__ and `functionName` set to `"approve"`
 */
export const useSimulateIerc20TokenApprove =
  /* #__PURE__ */ createUseSimulateContract({
    abi: ierc20TokenAbi,
    functionName: 'approve',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc20TokenAbi}__ and `functionName` set to `"permit"`
 */
export const useSimulateIerc20TokenPermit =
  /* #__PURE__ */ createUseSimulateContract({
    abi: ierc20TokenAbi,
    functionName: 'permit',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc20TokenAbi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateIerc20TokenTransfer =
  /* #__PURE__ */ createUseSimulateContract({
    abi: ierc20TokenAbi,
    functionName: 'transfer',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc20TokenAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateIerc20TokenTransferFrom =
  /* #__PURE__ */ createUseSimulateContract({
    abi: ierc20TokenAbi,
    functionName: 'transferFrom',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc20TokenAbi}__
 */
export const useWatchIerc20TokenEvent =
  /* #__PURE__ */ createUseWatchContractEvent({ abi: ierc20TokenAbi });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc20TokenAbi}__ and `eventName` set to `"Approval"`
 */
export const useWatchIerc20TokenApprovalEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: ierc20TokenAbi,
    eventName: 'Approval',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc20TokenAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchIerc20TokenTransferEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: ierc20TokenAbi,
    eventName: 'Transfer',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc5267Abi}__
 */
export const useReadIerc5267 = /* #__PURE__ */ createUseReadContract({
  abi: ierc5267Abi,
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc5267Abi}__ and `functionName` set to `"eip712Domain"`
 */
export const useReadIerc5267Eip712Domain =
  /* #__PURE__ */ createUseReadContract({
    abi: ierc5267Abi,
    functionName: 'eip712Domain',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc5267Abi}__
 */
export const useWatchIerc5267Event =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: ierc5267Abi,
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc5267Abi}__ and `eventName` set to `"EIP712DomainChanged"`
 */
export const useWatchIerc5267Eip712DomainChangedEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: ierc5267Abi,
    eventName: 'EIP712DomainChanged',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iGigManagerAbi}__
 */
export const useReadIGigManager = /* #__PURE__ */ createUseReadContract({
  abi: iGigManagerAbi,
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iGigManagerAbi}__ and `functionName` set to `"getEscrow"`
 */
export const useReadIGigManagerGetEscrow =
  /* #__PURE__ */ createUseReadContract({
    abi: iGigManagerAbi,
    functionName: 'getEscrow',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iGigManagerAbi}__ and `functionName` set to `"getGig"`
 */
export const useReadIGigManagerGetGig = /* #__PURE__ */ createUseReadContract({
  abi: iGigManagerAbi,
  functionName: 'getGig',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iGigManagerAbi}__ and `functionName` set to `"getProposal"`
 */
export const useReadIGigManagerGetProposal =
  /* #__PURE__ */ createUseReadContract({
    abi: iGigManagerAbi,
    functionName: 'getProposal',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iGigManagerAbi}__
 */
export const useWriteIGigManager = /* #__PURE__ */ createUseWriteContract({
  abi: iGigManagerAbi,
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iGigManagerAbi}__ and `functionName` set to `"acceptProposal"`
 */
export const useWriteIGigManagerAcceptProposal =
  /* #__PURE__ */ createUseWriteContract({
    abi: iGigManagerAbi,
    functionName: 'acceptProposal',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iGigManagerAbi}__ and `functionName` set to `"acceptProposalWithSignatures"`
 */
export const useWriteIGigManagerAcceptProposalWithSignatures =
  /* #__PURE__ */ createUseWriteContract({
    abi: iGigManagerAbi,
    functionName: 'acceptProposalWithSignatures',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iGigManagerAbi}__ and `functionName` set to `"createGig"`
 */
export const useWriteIGigManagerCreateGig =
  /* #__PURE__ */ createUseWriteContract({
    abi: iGigManagerAbi,
    functionName: 'createGig',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iGigManagerAbi}__ and `functionName` set to `"createProposal"`
 */
export const useWriteIGigManagerCreateProposal =
  /* #__PURE__ */ createUseWriteContract({
    abi: iGigManagerAbi,
    functionName: 'createProposal',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iGigManagerAbi}__ and `functionName` set to `"editProposal"`
 */
export const useWriteIGigManagerEditProposal =
  /* #__PURE__ */ createUseWriteContract({
    abi: iGigManagerAbi,
    functionName: 'editProposal',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iGigManagerAbi}__
 */
export const useSimulateIGigManager = /* #__PURE__ */ createUseSimulateContract(
  {
    abi: iGigManagerAbi,
  },
);

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iGigManagerAbi}__ and `functionName` set to `"acceptProposal"`
 */
export const useSimulateIGigManagerAcceptProposal =
  /* #__PURE__ */ createUseSimulateContract({
    abi: iGigManagerAbi,
    functionName: 'acceptProposal',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iGigManagerAbi}__ and `functionName` set to `"acceptProposalWithSignatures"`
 */
export const useSimulateIGigManagerAcceptProposalWithSignatures =
  /* #__PURE__ */ createUseSimulateContract({
    abi: iGigManagerAbi,
    functionName: 'acceptProposalWithSignatures',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iGigManagerAbi}__ and `functionName` set to `"createGig"`
 */
export const useSimulateIGigManagerCreateGig =
  /* #__PURE__ */ createUseSimulateContract({
    abi: iGigManagerAbi,
    functionName: 'createGig',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iGigManagerAbi}__ and `functionName` set to `"createProposal"`
 */
export const useSimulateIGigManagerCreateProposal =
  /* #__PURE__ */ createUseSimulateContract({
    abi: iGigManagerAbi,
    functionName: 'createProposal',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iGigManagerAbi}__ and `functionName` set to `"editProposal"`
 */
export const useSimulateIGigManagerEditProposal =
  /* #__PURE__ */ createUseSimulateContract({
    abi: iGigManagerAbi,
    functionName: 'editProposal',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iGigManagerAbi}__
 */
export const useWatchIGigManagerEvent =
  /* #__PURE__ */ createUseWatchContractEvent({ abi: iGigManagerAbi });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iGigManagerAbi}__ and `eventName` set to `"GigCreated"`
 */
export const useWatchIGigManagerGigCreatedEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: iGigManagerAbi,
    eventName: 'GigCreated',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iGigManagerAbi}__ and `eventName` set to `"GigManagerInit"`
 */
export const useWatchIGigManagerGigManagerInitEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: iGigManagerAbi,
    eventName: 'GigManagerInit',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iGigManagerAbi}__ and `eventName` set to `"ProposalAccepted"`
 */
export const useWatchIGigManagerProposalAcceptedEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: iGigManagerAbi,
    eventName: 'ProposalAccepted',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iGigManagerAbi}__ and `eventName` set to `"ProposalCreated"`
 */
export const useWatchIGigManagerProposalCreatedEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: iGigManagerAbi,
    eventName: 'ProposalCreated',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iGigManagerAbi}__ and `eventName` set to `"ProposalEdited"`
 */
export const useWatchIGigManagerProposalEditedEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: iGigManagerAbi,
    eventName: 'ProposalEdited',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iLimiterAbi}__
 */
export const useWriteILimiter = /* #__PURE__ */ createUseWriteContract({
  abi: iLimiterAbi,
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iLimiterAbi}__ and `functionName` set to `"submitProofLimiter"`
 */
export const useWriteILimiterSubmitProofLimiter =
  /* #__PURE__ */ createUseWriteContract({
    abi: iLimiterAbi,
    functionName: 'submitProofLimiter',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iLimiterAbi}__
 */
export const useSimulateILimiter = /* #__PURE__ */ createUseSimulateContract({
  abi: iLimiterAbi,
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iLimiterAbi}__ and `functionName` set to `"submitProofLimiter"`
 */
export const useSimulateILimiterSubmitProofLimiter =
  /* #__PURE__ */ createUseSimulateContract({
    abi: iLimiterAbi,
    functionName: 'submitProofLimiter',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__
 */
export const useReadIMulticall3 = /* #__PURE__ */ createUseReadContract({
  abi: iMulticall3Abi,
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getBasefee"`
 */
export const useReadIMulticall3GetBasefee =
  /* #__PURE__ */ createUseReadContract({
    abi: iMulticall3Abi,
    functionName: 'getBasefee',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getBlockHash"`
 */
export const useReadIMulticall3GetBlockHash =
  /* #__PURE__ */ createUseReadContract({
    abi: iMulticall3Abi,
    functionName: 'getBlockHash',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getBlockNumber"`
 */
export const useReadIMulticall3GetBlockNumber =
  /* #__PURE__ */ createUseReadContract({
    abi: iMulticall3Abi,
    functionName: 'getBlockNumber',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getChainId"`
 */
export const useReadIMulticall3GetChainId =
  /* #__PURE__ */ createUseReadContract({
    abi: iMulticall3Abi,
    functionName: 'getChainId',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getCurrentBlockCoinbase"`
 */
export const useReadIMulticall3GetCurrentBlockCoinbase =
  /* #__PURE__ */ createUseReadContract({
    abi: iMulticall3Abi,
    functionName: 'getCurrentBlockCoinbase',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getCurrentBlockDifficulty"`
 */
export const useReadIMulticall3GetCurrentBlockDifficulty =
  /* #__PURE__ */ createUseReadContract({
    abi: iMulticall3Abi,
    functionName: 'getCurrentBlockDifficulty',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getCurrentBlockGasLimit"`
 */
export const useReadIMulticall3GetCurrentBlockGasLimit =
  /* #__PURE__ */ createUseReadContract({
    abi: iMulticall3Abi,
    functionName: 'getCurrentBlockGasLimit',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getCurrentBlockTimestamp"`
 */
export const useReadIMulticall3GetCurrentBlockTimestamp =
  /* #__PURE__ */ createUseReadContract({
    abi: iMulticall3Abi,
    functionName: 'getCurrentBlockTimestamp',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getEthBalance"`
 */
export const useReadIMulticall3GetEthBalance =
  /* #__PURE__ */ createUseReadContract({
    abi: iMulticall3Abi,
    functionName: 'getEthBalance',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getLastBlockHash"`
 */
export const useReadIMulticall3GetLastBlockHash =
  /* #__PURE__ */ createUseReadContract({
    abi: iMulticall3Abi,
    functionName: 'getLastBlockHash',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iMulticall3Abi}__
 */
export const useWriteIMulticall3 = /* #__PURE__ */ createUseWriteContract({
  abi: iMulticall3Abi,
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"aggregate"`
 */
export const useWriteIMulticall3Aggregate =
  /* #__PURE__ */ createUseWriteContract({
    abi: iMulticall3Abi,
    functionName: 'aggregate',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"aggregate3"`
 */
export const useWriteIMulticall3Aggregate3 =
  /* #__PURE__ */ createUseWriteContract({
    abi: iMulticall3Abi,
    functionName: 'aggregate3',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"aggregate3Value"`
 */
export const useWriteIMulticall3Aggregate3Value =
  /* #__PURE__ */ createUseWriteContract({
    abi: iMulticall3Abi,
    functionName: 'aggregate3Value',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"blockAndAggregate"`
 */
export const useWriteIMulticall3BlockAndAggregate =
  /* #__PURE__ */ createUseWriteContract({
    abi: iMulticall3Abi,
    functionName: 'blockAndAggregate',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"tryAggregate"`
 */
export const useWriteIMulticall3TryAggregate =
  /* #__PURE__ */ createUseWriteContract({
    abi: iMulticall3Abi,
    functionName: 'tryAggregate',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"tryBlockAndAggregate"`
 */
export const useWriteIMulticall3TryBlockAndAggregate =
  /* #__PURE__ */ createUseWriteContract({
    abi: iMulticall3Abi,
    functionName: 'tryBlockAndAggregate',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iMulticall3Abi}__
 */
export const useSimulateIMulticall3 = /* #__PURE__ */ createUseSimulateContract(
  {
    abi: iMulticall3Abi,
  },
);

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"aggregate"`
 */
export const useSimulateIMulticall3Aggregate =
  /* #__PURE__ */ createUseSimulateContract({
    abi: iMulticall3Abi,
    functionName: 'aggregate',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"aggregate3"`
 */
export const useSimulateIMulticall3Aggregate3 =
  /* #__PURE__ */ createUseSimulateContract({
    abi: iMulticall3Abi,
    functionName: 'aggregate3',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"aggregate3Value"`
 */
export const useSimulateIMulticall3Aggregate3Value =
  /* #__PURE__ */ createUseSimulateContract({
    abi: iMulticall3Abi,
    functionName: 'aggregate3Value',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"blockAndAggregate"`
 */
export const useSimulateIMulticall3BlockAndAggregate =
  /* #__PURE__ */ createUseSimulateContract({
    abi: iMulticall3Abi,
    functionName: 'blockAndAggregate',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"tryAggregate"`
 */
export const useSimulateIMulticall3TryAggregate =
  /* #__PURE__ */ createUseSimulateContract({
    abi: iMulticall3Abi,
    functionName: 'tryAggregate',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"tryBlockAndAggregate"`
 */
export const useSimulateIMulticall3TryBlockAndAggregate =
  /* #__PURE__ */ createUseSimulateContract({
    abi: iMulticall3Abi,
    functionName: 'tryBlockAndAggregate',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iQuestChainAbi}__
 */
export const useReadIQuestChain = /* #__PURE__ */ createUseReadContract({
  abi: iQuestChainAbi,
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iQuestChainAbi}__ and `functionName` set to `"getTokenURI"`
 */
export const useReadIQuestChainGetTokenUri =
  /* #__PURE__ */ createUseReadContract({
    abi: iQuestChainAbi,
    functionName: 'getTokenURI',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iQuestChainAbi}__ and `functionName` set to `"questChainFactory"`
 */
export const useReadIQuestChainQuestChainFactory =
  /* #__PURE__ */ createUseReadContract({
    abi: iQuestChainAbi,
    functionName: 'questChainFactory',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iQuestChainAbi}__ and `functionName` set to `"questChainId"`
 */
export const useReadIQuestChainQuestChainId =
  /* #__PURE__ */ createUseReadContract({
    abi: iQuestChainAbi,
    functionName: 'questChainId',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iQuestChainAbi}__ and `functionName` set to `"questChainToken"`
 */
export const useReadIQuestChainQuestChainToken =
  /* #__PURE__ */ createUseReadContract({
    abi: iQuestChainAbi,
    functionName: 'questChainToken',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iQuestChainAbi}__ and `functionName` set to `"questStatus"`
 */
export const useReadIQuestChainQuestStatus =
  /* #__PURE__ */ createUseReadContract({
    abi: iQuestChainAbi,
    functionName: 'questStatus',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iQuestChainAbi}__
 */
export const useWriteIQuestChain = /* #__PURE__ */ createUseWriteContract({
  abi: iQuestChainAbi,
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iQuestChainAbi}__ and `functionName` set to `"addQuests"`
 */
export const useWriteIQuestChainAddQuests =
  /* #__PURE__ */ createUseWriteContract({
    abi: iQuestChainAbi,
    functionName: 'addQuests',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iQuestChainAbi}__ and `functionName` set to `"burnToken"`
 */
export const useWriteIQuestChainBurnToken =
  /* #__PURE__ */ createUseWriteContract({
    abi: iQuestChainAbi,
    functionName: 'burnToken',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iQuestChainAbi}__ and `functionName` set to `"edit"`
 */
export const useWriteIQuestChainEdit = /* #__PURE__ */ createUseWriteContract({
  abi: iQuestChainAbi,
  functionName: 'edit',
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iQuestChainAbi}__ and `functionName` set to `"editQuests"`
 */
export const useWriteIQuestChainEditQuests =
  /* #__PURE__ */ createUseWriteContract({
    abi: iQuestChainAbi,
    functionName: 'editQuests',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iQuestChainAbi}__ and `functionName` set to `"init"`
 */
export const useWriteIQuestChainInit = /* #__PURE__ */ createUseWriteContract({
  abi: iQuestChainAbi,
  functionName: 'init',
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iQuestChainAbi}__ and `functionName` set to `"mintToken"`
 */
export const useWriteIQuestChainMintToken =
  /* #__PURE__ */ createUseWriteContract({
    abi: iQuestChainAbi,
    functionName: 'mintToken',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iQuestChainAbi}__ and `functionName` set to `"reviewProofs"`
 */
export const useWriteIQuestChainReviewProofs =
  /* #__PURE__ */ createUseWriteContract({
    abi: iQuestChainAbi,
    functionName: 'reviewProofs',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iQuestChainAbi}__ and `functionName` set to `"setTokenURI"`
 */
export const useWriteIQuestChainSetTokenUri =
  /* #__PURE__ */ createUseWriteContract({
    abi: iQuestChainAbi,
    functionName: 'setTokenURI',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iQuestChainAbi}__ and `functionName` set to `"submitProofs"`
 */
export const useWriteIQuestChainSubmitProofs =
  /* #__PURE__ */ createUseWriteContract({
    abi: iQuestChainAbi,
    functionName: 'submitProofs',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iQuestChainAbi}__
 */
export const useSimulateIQuestChain = /* #__PURE__ */ createUseSimulateContract(
  {
    abi: iQuestChainAbi,
  },
);

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iQuestChainAbi}__ and `functionName` set to `"addQuests"`
 */
export const useSimulateIQuestChainAddQuests =
  /* #__PURE__ */ createUseSimulateContract({
    abi: iQuestChainAbi,
    functionName: 'addQuests',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iQuestChainAbi}__ and `functionName` set to `"burnToken"`
 */
export const useSimulateIQuestChainBurnToken =
  /* #__PURE__ */ createUseSimulateContract({
    abi: iQuestChainAbi,
    functionName: 'burnToken',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iQuestChainAbi}__ and `functionName` set to `"edit"`
 */
export const useSimulateIQuestChainEdit =
  /* #__PURE__ */ createUseSimulateContract({
    abi: iQuestChainAbi,
    functionName: 'edit',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iQuestChainAbi}__ and `functionName` set to `"editQuests"`
 */
export const useSimulateIQuestChainEditQuests =
  /* #__PURE__ */ createUseSimulateContract({
    abi: iQuestChainAbi,
    functionName: 'editQuests',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iQuestChainAbi}__ and `functionName` set to `"init"`
 */
export const useSimulateIQuestChainInit =
  /* #__PURE__ */ createUseSimulateContract({
    abi: iQuestChainAbi,
    functionName: 'init',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iQuestChainAbi}__ and `functionName` set to `"mintToken"`
 */
export const useSimulateIQuestChainMintToken =
  /* #__PURE__ */ createUseSimulateContract({
    abi: iQuestChainAbi,
    functionName: 'mintToken',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iQuestChainAbi}__ and `functionName` set to `"reviewProofs"`
 */
export const useSimulateIQuestChainReviewProofs =
  /* #__PURE__ */ createUseSimulateContract({
    abi: iQuestChainAbi,
    functionName: 'reviewProofs',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iQuestChainAbi}__ and `functionName` set to `"setTokenURI"`
 */
export const useSimulateIQuestChainSetTokenUri =
  /* #__PURE__ */ createUseSimulateContract({
    abi: iQuestChainAbi,
    functionName: 'setTokenURI',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iQuestChainAbi}__ and `functionName` set to `"submitProofs"`
 */
export const useSimulateIQuestChainSubmitProofs =
  /* #__PURE__ */ createUseSimulateContract({
    abi: iQuestChainAbi,
    functionName: 'submitProofs',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iQuestChainAbi}__
 */
export const useWatchIQuestChainEvent =
  /* #__PURE__ */ createUseWatchContractEvent({ abi: iQuestChainAbi });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iQuestChainAbi}__ and `eventName` set to `"QuestChainEdited"`
 */
export const useWatchIQuestChainQuestChainEditedEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: iQuestChainAbi,
    eventName: 'QuestChainEdited',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iQuestChainAbi}__ and `eventName` set to `"QuestChainInit"`
 */
export const useWatchIQuestChainQuestChainInitEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: iQuestChainAbi,
    eventName: 'QuestChainInit',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iQuestChainAbi}__ and `eventName` set to `"QuestChainTokenURIUpdated"`
 */
export const useWatchIQuestChainQuestChainTokenUriUpdatedEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: iQuestChainAbi,
    eventName: 'QuestChainTokenURIUpdated',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iQuestChainAbi}__ and `eventName` set to `"QuestProofsReviewed"`
 */
export const useWatchIQuestChainQuestProofsReviewedEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: iQuestChainAbi,
    eventName: 'QuestProofsReviewed',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iQuestChainAbi}__ and `eventName` set to `"QuestProofsSubmitted"`
 */
export const useWatchIQuestChainQuestProofsSubmittedEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: iQuestChainAbi,
    eventName: 'QuestProofsSubmitted',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iQuestChainAbi}__ and `eventName` set to `"QuestsAdded"`
 */
export const useWatchIQuestChainQuestsAddedEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: iQuestChainAbi,
    eventName: 'QuestsAdded',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iQuestChainAbi}__ and `eventName` set to `"QuestsEdited"`
 */
export const useWatchIQuestChainQuestsEditedEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: iQuestChainAbi,
    eventName: 'QuestsEdited',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iQuestChainAbi}__ and `eventName` set to `"SetLimiter"`
 */
export const useWatchIQuestChainSetLimiterEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: iQuestChainAbi,
    eventName: 'SetLimiter',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iQuestChainFactoryAbi}__
 */
export const useReadIQuestChainFactory = /* #__PURE__ */ createUseReadContract({
  abi: iQuestChainFactoryAbi,
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iQuestChainFactoryAbi}__ and `functionName` set to `"admin"`
 */
export const useReadIQuestChainFactoryAdmin =
  /* #__PURE__ */ createUseReadContract({
    abi: iQuestChainFactoryAbi,
    functionName: 'admin',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iQuestChainFactoryAbi}__ and `functionName` set to `"getQuestChainAddress"`
 */
export const useReadIQuestChainFactoryGetQuestChainAddress =
  /* #__PURE__ */ createUseReadContract({
    abi: iQuestChainFactoryAbi,
    functionName: 'getQuestChainAddress',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iQuestChainFactoryAbi}__ and `functionName` set to `"questChainCount"`
 */
export const useReadIQuestChainFactoryQuestChainCount =
  /* #__PURE__ */ createUseReadContract({
    abi: iQuestChainFactoryAbi,
    functionName: 'questChainCount',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iQuestChainFactoryAbi}__ and `functionName` set to `"questChainTemplate"`
 */
export const useReadIQuestChainFactoryQuestChainTemplate =
  /* #__PURE__ */ createUseReadContract({
    abi: iQuestChainFactoryAbi,
    functionName: 'questChainTemplate',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iQuestChainFactoryAbi}__ and `functionName` set to `"questChainToken"`
 */
export const useReadIQuestChainFactoryQuestChainToken =
  /* #__PURE__ */ createUseReadContract({
    abi: iQuestChainFactoryAbi,
    functionName: 'questChainToken',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iQuestChainFactoryAbi}__
 */
export const useWriteIQuestChainFactory =
  /* #__PURE__ */ createUseWriteContract({
    abi: iQuestChainFactoryAbi,
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iQuestChainFactoryAbi}__ and `functionName` set to `"create"`
 */
export const useWriteIQuestChainFactoryCreate =
  /* #__PURE__ */ createUseWriteContract({
    abi: iQuestChainFactoryAbi,
    functionName: 'create',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iQuestChainFactoryAbi}__
 */
export const useSimulateIQuestChainFactory =
  /* #__PURE__ */ createUseSimulateContract({ abi: iQuestChainFactoryAbi });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iQuestChainFactoryAbi}__ and `functionName` set to `"create"`
 */
export const useSimulateIQuestChainFactoryCreate =
  /* #__PURE__ */ createUseSimulateContract({
    abi: iQuestChainFactoryAbi,
    functionName: 'create',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iQuestChainFactoryAbi}__
 */
export const useWatchIQuestChainFactoryEvent =
  /* #__PURE__ */ createUseWatchContractEvent({ abi: iQuestChainFactoryAbi });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iQuestChainFactoryAbi}__ and `eventName` set to `"AdminReplaceProposed"`
 */
export const useWatchIQuestChainFactoryAdminReplaceProposedEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: iQuestChainFactoryAbi,
    eventName: 'AdminReplaceProposed',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iQuestChainFactoryAbi}__ and `eventName` set to `"AdminReplaced"`
 */
export const useWatchIQuestChainFactoryAdminReplacedEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: iQuestChainFactoryAbi,
    eventName: 'AdminReplaced',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iQuestChainFactoryAbi}__ and `eventName` set to `"FactorySetup"`
 */
export const useWatchIQuestChainFactoryFactorySetupEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: iQuestChainFactoryAbi,
    eventName: 'FactorySetup',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iQuestChainFactoryAbi}__ and `eventName` set to `"QuestChainCreated"`
 */
export const useWatchIQuestChainFactoryQuestChainCreatedEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: iQuestChainFactoryAbi,
    eventName: 'QuestChainCreated',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iQuestChainFactoryFunctionsAbi}__
 */
export const useReadIQuestChainFactoryFunctions =
  /* #__PURE__ */ createUseReadContract({
    abi: iQuestChainFactoryFunctionsAbi,
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iQuestChainFactoryFunctionsAbi}__ and `functionName` set to `"admin"`
 */
export const useReadIQuestChainFactoryFunctionsAdmin =
  /* #__PURE__ */ createUseReadContract({
    abi: iQuestChainFactoryFunctionsAbi,
    functionName: 'admin',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iQuestChainFactoryFunctionsAbi}__ and `functionName` set to `"getQuestChainAddress"`
 */
export const useReadIQuestChainFactoryFunctionsGetQuestChainAddress =
  /* #__PURE__ */ createUseReadContract({
    abi: iQuestChainFactoryFunctionsAbi,
    functionName: 'getQuestChainAddress',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iQuestChainFactoryFunctionsAbi}__ and `functionName` set to `"questChainCount"`
 */
export const useReadIQuestChainFactoryFunctionsQuestChainCount =
  /* #__PURE__ */ createUseReadContract({
    abi: iQuestChainFactoryFunctionsAbi,
    functionName: 'questChainCount',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iQuestChainFactoryFunctionsAbi}__ and `functionName` set to `"questChainTemplate"`
 */
export const useReadIQuestChainFactoryFunctionsQuestChainTemplate =
  /* #__PURE__ */ createUseReadContract({
    abi: iQuestChainFactoryFunctionsAbi,
    functionName: 'questChainTemplate',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iQuestChainFactoryFunctionsAbi}__ and `functionName` set to `"questChainToken"`
 */
export const useReadIQuestChainFactoryFunctionsQuestChainToken =
  /* #__PURE__ */ createUseReadContract({
    abi: iQuestChainFactoryFunctionsAbi,
    functionName: 'questChainToken',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iQuestChainFactoryFunctionsAbi}__
 */
export const useWriteIQuestChainFactoryFunctions =
  /* #__PURE__ */ createUseWriteContract({
    abi: iQuestChainFactoryFunctionsAbi,
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iQuestChainFactoryFunctionsAbi}__ and `functionName` set to `"create"`
 */
export const useWriteIQuestChainFactoryFunctionsCreate =
  /* #__PURE__ */ createUseWriteContract({
    abi: iQuestChainFactoryFunctionsAbi,
    functionName: 'create',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iQuestChainFactoryFunctionsAbi}__
 */
export const useSimulateIQuestChainFactoryFunctions =
  /* #__PURE__ */ createUseSimulateContract({
    abi: iQuestChainFactoryFunctionsAbi,
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iQuestChainFactoryFunctionsAbi}__ and `functionName` set to `"create"`
 */
export const useSimulateIQuestChainFactoryFunctionsCreate =
  /* #__PURE__ */ createUseSimulateContract({
    abi: iQuestChainFactoryFunctionsAbi,
    functionName: 'create',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iQuestChainFactorySignalsAbi}__
 */
export const useWatchIQuestChainFactorySignalsEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: iQuestChainFactorySignalsAbi,
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iQuestChainFactorySignalsAbi}__ and `eventName` set to `"AdminReplaceProposed"`
 */
export const useWatchIQuestChainFactorySignalsAdminReplaceProposedEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: iQuestChainFactorySignalsAbi,
    eventName: 'AdminReplaceProposed',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iQuestChainFactorySignalsAbi}__ and `eventName` set to `"AdminReplaced"`
 */
export const useWatchIQuestChainFactorySignalsAdminReplacedEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: iQuestChainFactorySignalsAbi,
    eventName: 'AdminReplaced',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iQuestChainFactorySignalsAbi}__ and `eventName` set to `"FactorySetup"`
 */
export const useWatchIQuestChainFactorySignalsFactorySetupEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: iQuestChainFactorySignalsAbi,
    eventName: 'FactorySetup',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iQuestChainFactorySignalsAbi}__ and `eventName` set to `"QuestChainCreated"`
 */
export const useWatchIQuestChainFactorySignalsQuestChainCreatedEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: iQuestChainFactorySignalsAbi,
    eventName: 'QuestChainCreated',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iQuestChainFunctionsAbi}__
 */
export const useReadIQuestChainFunctions =
  /* #__PURE__ */ createUseReadContract({
    abi: iQuestChainFunctionsAbi,
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iQuestChainFunctionsAbi}__ and `functionName` set to `"getTokenURI"`
 */
export const useReadIQuestChainFunctionsGetTokenUri =
  /* #__PURE__ */ createUseReadContract({
    abi: iQuestChainFunctionsAbi,
    functionName: 'getTokenURI',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iQuestChainFunctionsAbi}__ and `functionName` set to `"questChainFactory"`
 */
export const useReadIQuestChainFunctionsQuestChainFactory =
  /* #__PURE__ */ createUseReadContract({
    abi: iQuestChainFunctionsAbi,
    functionName: 'questChainFactory',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iQuestChainFunctionsAbi}__ and `functionName` set to `"questChainId"`
 */
export const useReadIQuestChainFunctionsQuestChainId =
  /* #__PURE__ */ createUseReadContract({
    abi: iQuestChainFunctionsAbi,
    functionName: 'questChainId',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iQuestChainFunctionsAbi}__ and `functionName` set to `"questChainToken"`
 */
export const useReadIQuestChainFunctionsQuestChainToken =
  /* #__PURE__ */ createUseReadContract({
    abi: iQuestChainFunctionsAbi,
    functionName: 'questChainToken',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iQuestChainFunctionsAbi}__ and `functionName` set to `"questStatus"`
 */
export const useReadIQuestChainFunctionsQuestStatus =
  /* #__PURE__ */ createUseReadContract({
    abi: iQuestChainFunctionsAbi,
    functionName: 'questStatus',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iQuestChainFunctionsAbi}__
 */
export const useWriteIQuestChainFunctions =
  /* #__PURE__ */ createUseWriteContract({ abi: iQuestChainFunctionsAbi });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iQuestChainFunctionsAbi}__ and `functionName` set to `"addQuests"`
 */
export const useWriteIQuestChainFunctionsAddQuests =
  /* #__PURE__ */ createUseWriteContract({
    abi: iQuestChainFunctionsAbi,
    functionName: 'addQuests',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iQuestChainFunctionsAbi}__ and `functionName` set to `"burnToken"`
 */
export const useWriteIQuestChainFunctionsBurnToken =
  /* #__PURE__ */ createUseWriteContract({
    abi: iQuestChainFunctionsAbi,
    functionName: 'burnToken',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iQuestChainFunctionsAbi}__ and `functionName` set to `"edit"`
 */
export const useWriteIQuestChainFunctionsEdit =
  /* #__PURE__ */ createUseWriteContract({
    abi: iQuestChainFunctionsAbi,
    functionName: 'edit',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iQuestChainFunctionsAbi}__ and `functionName` set to `"editQuests"`
 */
export const useWriteIQuestChainFunctionsEditQuests =
  /* #__PURE__ */ createUseWriteContract({
    abi: iQuestChainFunctionsAbi,
    functionName: 'editQuests',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iQuestChainFunctionsAbi}__ and `functionName` set to `"init"`
 */
export const useWriteIQuestChainFunctionsInit =
  /* #__PURE__ */ createUseWriteContract({
    abi: iQuestChainFunctionsAbi,
    functionName: 'init',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iQuestChainFunctionsAbi}__ and `functionName` set to `"mintToken"`
 */
export const useWriteIQuestChainFunctionsMintToken =
  /* #__PURE__ */ createUseWriteContract({
    abi: iQuestChainFunctionsAbi,
    functionName: 'mintToken',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iQuestChainFunctionsAbi}__ and `functionName` set to `"reviewProofs"`
 */
export const useWriteIQuestChainFunctionsReviewProofs =
  /* #__PURE__ */ createUseWriteContract({
    abi: iQuestChainFunctionsAbi,
    functionName: 'reviewProofs',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iQuestChainFunctionsAbi}__ and `functionName` set to `"setTokenURI"`
 */
export const useWriteIQuestChainFunctionsSetTokenUri =
  /* #__PURE__ */ createUseWriteContract({
    abi: iQuestChainFunctionsAbi,
    functionName: 'setTokenURI',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iQuestChainFunctionsAbi}__ and `functionName` set to `"submitProofs"`
 */
export const useWriteIQuestChainFunctionsSubmitProofs =
  /* #__PURE__ */ createUseWriteContract({
    abi: iQuestChainFunctionsAbi,
    functionName: 'submitProofs',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iQuestChainFunctionsAbi}__
 */
export const useSimulateIQuestChainFunctions =
  /* #__PURE__ */ createUseSimulateContract({ abi: iQuestChainFunctionsAbi });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iQuestChainFunctionsAbi}__ and `functionName` set to `"addQuests"`
 */
export const useSimulateIQuestChainFunctionsAddQuests =
  /* #__PURE__ */ createUseSimulateContract({
    abi: iQuestChainFunctionsAbi,
    functionName: 'addQuests',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iQuestChainFunctionsAbi}__ and `functionName` set to `"burnToken"`
 */
export const useSimulateIQuestChainFunctionsBurnToken =
  /* #__PURE__ */ createUseSimulateContract({
    abi: iQuestChainFunctionsAbi,
    functionName: 'burnToken',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iQuestChainFunctionsAbi}__ and `functionName` set to `"edit"`
 */
export const useSimulateIQuestChainFunctionsEdit =
  /* #__PURE__ */ createUseSimulateContract({
    abi: iQuestChainFunctionsAbi,
    functionName: 'edit',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iQuestChainFunctionsAbi}__ and `functionName` set to `"editQuests"`
 */
export const useSimulateIQuestChainFunctionsEditQuests =
  /* #__PURE__ */ createUseSimulateContract({
    abi: iQuestChainFunctionsAbi,
    functionName: 'editQuests',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iQuestChainFunctionsAbi}__ and `functionName` set to `"init"`
 */
export const useSimulateIQuestChainFunctionsInit =
  /* #__PURE__ */ createUseSimulateContract({
    abi: iQuestChainFunctionsAbi,
    functionName: 'init',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iQuestChainFunctionsAbi}__ and `functionName` set to `"mintToken"`
 */
export const useSimulateIQuestChainFunctionsMintToken =
  /* #__PURE__ */ createUseSimulateContract({
    abi: iQuestChainFunctionsAbi,
    functionName: 'mintToken',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iQuestChainFunctionsAbi}__ and `functionName` set to `"reviewProofs"`
 */
export const useSimulateIQuestChainFunctionsReviewProofs =
  /* #__PURE__ */ createUseSimulateContract({
    abi: iQuestChainFunctionsAbi,
    functionName: 'reviewProofs',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iQuestChainFunctionsAbi}__ and `functionName` set to `"setTokenURI"`
 */
export const useSimulateIQuestChainFunctionsSetTokenUri =
  /* #__PURE__ */ createUseSimulateContract({
    abi: iQuestChainFunctionsAbi,
    functionName: 'setTokenURI',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iQuestChainFunctionsAbi}__ and `functionName` set to `"submitProofs"`
 */
export const useSimulateIQuestChainFunctionsSubmitProofs =
  /* #__PURE__ */ createUseSimulateContract({
    abi: iQuestChainFunctionsAbi,
    functionName: 'submitProofs',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iQuestChainSignalsAbi}__
 */
export const useWatchIQuestChainSignalsEvent =
  /* #__PURE__ */ createUseWatchContractEvent({ abi: iQuestChainSignalsAbi });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iQuestChainSignalsAbi}__ and `eventName` set to `"QuestChainEdited"`
 */
export const useWatchIQuestChainSignalsQuestChainEditedEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: iQuestChainSignalsAbi,
    eventName: 'QuestChainEdited',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iQuestChainSignalsAbi}__ and `eventName` set to `"QuestChainInit"`
 */
export const useWatchIQuestChainSignalsQuestChainInitEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: iQuestChainSignalsAbi,
    eventName: 'QuestChainInit',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iQuestChainSignalsAbi}__ and `eventName` set to `"QuestChainTokenURIUpdated"`
 */
export const useWatchIQuestChainSignalsQuestChainTokenUriUpdatedEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: iQuestChainSignalsAbi,
    eventName: 'QuestChainTokenURIUpdated',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iQuestChainSignalsAbi}__ and `eventName` set to `"QuestProofsReviewed"`
 */
export const useWatchIQuestChainSignalsQuestProofsReviewedEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: iQuestChainSignalsAbi,
    eventName: 'QuestProofsReviewed',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iQuestChainSignalsAbi}__ and `eventName` set to `"QuestProofsSubmitted"`
 */
export const useWatchIQuestChainSignalsQuestProofsSubmittedEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: iQuestChainSignalsAbi,
    eventName: 'QuestProofsSubmitted',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iQuestChainSignalsAbi}__ and `eventName` set to `"QuestsAdded"`
 */
export const useWatchIQuestChainSignalsQuestsAddedEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: iQuestChainSignalsAbi,
    eventName: 'QuestsAdded',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iQuestChainSignalsAbi}__ and `eventName` set to `"QuestsEdited"`
 */
export const useWatchIQuestChainSignalsQuestsEditedEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: iQuestChainSignalsAbi,
    eventName: 'QuestsEdited',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iQuestChainSignalsAbi}__ and `eventName` set to `"SetLimiter"`
 */
export const useWatchIQuestChainSignalsSetLimiterEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: iQuestChainSignalsAbi,
    eventName: 'SetLimiter',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iQuestChainTokenAbi}__
 */
export const useReadIQuestChainToken = /* #__PURE__ */ createUseReadContract({
  abi: iQuestChainTokenAbi,
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iQuestChainTokenAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadIQuestChainTokenBalanceOf =
  /* #__PURE__ */ createUseReadContract({
    abi: iQuestChainTokenAbi,
    functionName: 'balanceOf',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iQuestChainTokenAbi}__ and `functionName` set to `"balanceOfBatch"`
 */
export const useReadIQuestChainTokenBalanceOfBatch =
  /* #__PURE__ */ createUseReadContract({
    abi: iQuestChainTokenAbi,
    functionName: 'balanceOfBatch',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iQuestChainTokenAbi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const useReadIQuestChainTokenIsApprovedForAll =
  /* #__PURE__ */ createUseReadContract({
    abi: iQuestChainTokenAbi,
    functionName: 'isApprovedForAll',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iQuestChainTokenAbi}__ and `functionName` set to `"questChainFactory"`
 */
export const useReadIQuestChainTokenQuestChainFactory =
  /* #__PURE__ */ createUseReadContract({
    abi: iQuestChainTokenAbi,
    functionName: 'questChainFactory',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iQuestChainTokenAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadIQuestChainTokenSupportsInterface =
  /* #__PURE__ */ createUseReadContract({
    abi: iQuestChainTokenAbi,
    functionName: 'supportsInterface',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iQuestChainTokenAbi}__ and `functionName` set to `"tokenOwner"`
 */
export const useReadIQuestChainTokenTokenOwner =
  /* #__PURE__ */ createUseReadContract({
    abi: iQuestChainTokenAbi,
    functionName: 'tokenOwner',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iQuestChainTokenAbi}__ and `functionName` set to `"uri"`
 */
export const useReadIQuestChainTokenUri = /* #__PURE__ */ createUseReadContract(
  {
    abi: iQuestChainTokenAbi,
    functionName: 'uri',
  },
);

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iQuestChainTokenAbi}__
 */
export const useWriteIQuestChainToken = /* #__PURE__ */ createUseWriteContract({
  abi: iQuestChainTokenAbi,
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iQuestChainTokenAbi}__ and `functionName` set to `"burn"`
 */
export const useWriteIQuestChainTokenBurn =
  /* #__PURE__ */ createUseWriteContract({
    abi: iQuestChainTokenAbi,
    functionName: 'burn',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iQuestChainTokenAbi}__ and `functionName` set to `"mint"`
 */
export const useWriteIQuestChainTokenMint =
  /* #__PURE__ */ createUseWriteContract({
    abi: iQuestChainTokenAbi,
    functionName: 'mint',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iQuestChainTokenAbi}__ and `functionName` set to `"safeBatchTransferFrom"`
 */
export const useWriteIQuestChainTokenSafeBatchTransferFrom =
  /* #__PURE__ */ createUseWriteContract({
    abi: iQuestChainTokenAbi,
    functionName: 'safeBatchTransferFrom',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iQuestChainTokenAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useWriteIQuestChainTokenSafeTransferFrom =
  /* #__PURE__ */ createUseWriteContract({
    abi: iQuestChainTokenAbi,
    functionName: 'safeTransferFrom',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iQuestChainTokenAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useWriteIQuestChainTokenSetApprovalForAll =
  /* #__PURE__ */ createUseWriteContract({
    abi: iQuestChainTokenAbi,
    functionName: 'setApprovalForAll',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iQuestChainTokenAbi}__ and `functionName` set to `"setTokenOwner"`
 */
export const useWriteIQuestChainTokenSetTokenOwner =
  /* #__PURE__ */ createUseWriteContract({
    abi: iQuestChainTokenAbi,
    functionName: 'setTokenOwner',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iQuestChainTokenAbi}__ and `functionName` set to `"setTokenURI"`
 */
export const useWriteIQuestChainTokenSetTokenUri =
  /* #__PURE__ */ createUseWriteContract({
    abi: iQuestChainTokenAbi,
    functionName: 'setTokenURI',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iQuestChainTokenAbi}__
 */
export const useSimulateIQuestChainToken =
  /* #__PURE__ */ createUseSimulateContract({ abi: iQuestChainTokenAbi });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iQuestChainTokenAbi}__ and `functionName` set to `"burn"`
 */
export const useSimulateIQuestChainTokenBurn =
  /* #__PURE__ */ createUseSimulateContract({
    abi: iQuestChainTokenAbi,
    functionName: 'burn',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iQuestChainTokenAbi}__ and `functionName` set to `"mint"`
 */
export const useSimulateIQuestChainTokenMint =
  /* #__PURE__ */ createUseSimulateContract({
    abi: iQuestChainTokenAbi,
    functionName: 'mint',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iQuestChainTokenAbi}__ and `functionName` set to `"safeBatchTransferFrom"`
 */
export const useSimulateIQuestChainTokenSafeBatchTransferFrom =
  /* #__PURE__ */ createUseSimulateContract({
    abi: iQuestChainTokenAbi,
    functionName: 'safeBatchTransferFrom',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iQuestChainTokenAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useSimulateIQuestChainTokenSafeTransferFrom =
  /* #__PURE__ */ createUseSimulateContract({
    abi: iQuestChainTokenAbi,
    functionName: 'safeTransferFrom',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iQuestChainTokenAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useSimulateIQuestChainTokenSetApprovalForAll =
  /* #__PURE__ */ createUseSimulateContract({
    abi: iQuestChainTokenAbi,
    functionName: 'setApprovalForAll',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iQuestChainTokenAbi}__ and `functionName` set to `"setTokenOwner"`
 */
export const useSimulateIQuestChainTokenSetTokenOwner =
  /* #__PURE__ */ createUseSimulateContract({
    abi: iQuestChainTokenAbi,
    functionName: 'setTokenOwner',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iQuestChainTokenAbi}__ and `functionName` set to `"setTokenURI"`
 */
export const useSimulateIQuestChainTokenSetTokenUri =
  /* #__PURE__ */ createUseSimulateContract({
    abi: iQuestChainTokenAbi,
    functionName: 'setTokenURI',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iQuestChainTokenAbi}__
 */
export const useWatchIQuestChainTokenEvent =
  /* #__PURE__ */ createUseWatchContractEvent({ abi: iQuestChainTokenAbi });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iQuestChainTokenAbi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const useWatchIQuestChainTokenApprovalForAllEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: iQuestChainTokenAbi,
    eventName: 'ApprovalForAll',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iQuestChainTokenAbi}__ and `eventName` set to `"TransferBatch"`
 */
export const useWatchIQuestChainTokenTransferBatchEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: iQuestChainTokenAbi,
    eventName: 'TransferBatch',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iQuestChainTokenAbi}__ and `eventName` set to `"TransferSingle"`
 */
export const useWatchIQuestChainTokenTransferSingleEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: iQuestChainTokenAbi,
    eventName: 'TransferSingle',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iQuestChainTokenAbi}__ and `eventName` set to `"URI"`
 */
export const useWatchIQuestChainTokenUriEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: iQuestChainTokenAbi,
    eventName: 'URI',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iQuestChainTokenFunctionsAbi}__
 */
export const useReadIQuestChainTokenFunctions =
  /* #__PURE__ */ createUseReadContract({ abi: iQuestChainTokenFunctionsAbi });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iQuestChainTokenFunctionsAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadIQuestChainTokenFunctionsBalanceOf =
  /* #__PURE__ */ createUseReadContract({
    abi: iQuestChainTokenFunctionsAbi,
    functionName: 'balanceOf',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iQuestChainTokenFunctionsAbi}__ and `functionName` set to `"balanceOfBatch"`
 */
export const useReadIQuestChainTokenFunctionsBalanceOfBatch =
  /* #__PURE__ */ createUseReadContract({
    abi: iQuestChainTokenFunctionsAbi,
    functionName: 'balanceOfBatch',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iQuestChainTokenFunctionsAbi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const useReadIQuestChainTokenFunctionsIsApprovedForAll =
  /* #__PURE__ */ createUseReadContract({
    abi: iQuestChainTokenFunctionsAbi,
    functionName: 'isApprovedForAll',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iQuestChainTokenFunctionsAbi}__ and `functionName` set to `"questChainFactory"`
 */
export const useReadIQuestChainTokenFunctionsQuestChainFactory =
  /* #__PURE__ */ createUseReadContract({
    abi: iQuestChainTokenFunctionsAbi,
    functionName: 'questChainFactory',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iQuestChainTokenFunctionsAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadIQuestChainTokenFunctionsSupportsInterface =
  /* #__PURE__ */ createUseReadContract({
    abi: iQuestChainTokenFunctionsAbi,
    functionName: 'supportsInterface',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iQuestChainTokenFunctionsAbi}__ and `functionName` set to `"tokenOwner"`
 */
export const useReadIQuestChainTokenFunctionsTokenOwner =
  /* #__PURE__ */ createUseReadContract({
    abi: iQuestChainTokenFunctionsAbi,
    functionName: 'tokenOwner',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iQuestChainTokenFunctionsAbi}__ and `functionName` set to `"uri"`
 */
export const useReadIQuestChainTokenFunctionsUri =
  /* #__PURE__ */ createUseReadContract({
    abi: iQuestChainTokenFunctionsAbi,
    functionName: 'uri',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iQuestChainTokenFunctionsAbi}__
 */
export const useWriteIQuestChainTokenFunctions =
  /* #__PURE__ */ createUseWriteContract({ abi: iQuestChainTokenFunctionsAbi });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iQuestChainTokenFunctionsAbi}__ and `functionName` set to `"burn"`
 */
export const useWriteIQuestChainTokenFunctionsBurn =
  /* #__PURE__ */ createUseWriteContract({
    abi: iQuestChainTokenFunctionsAbi,
    functionName: 'burn',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iQuestChainTokenFunctionsAbi}__ and `functionName` set to `"mint"`
 */
export const useWriteIQuestChainTokenFunctionsMint =
  /* #__PURE__ */ createUseWriteContract({
    abi: iQuestChainTokenFunctionsAbi,
    functionName: 'mint',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iQuestChainTokenFunctionsAbi}__ and `functionName` set to `"safeBatchTransferFrom"`
 */
export const useWriteIQuestChainTokenFunctionsSafeBatchTransferFrom =
  /* #__PURE__ */ createUseWriteContract({
    abi: iQuestChainTokenFunctionsAbi,
    functionName: 'safeBatchTransferFrom',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iQuestChainTokenFunctionsAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useWriteIQuestChainTokenFunctionsSafeTransferFrom =
  /* #__PURE__ */ createUseWriteContract({
    abi: iQuestChainTokenFunctionsAbi,
    functionName: 'safeTransferFrom',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iQuestChainTokenFunctionsAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useWriteIQuestChainTokenFunctionsSetApprovalForAll =
  /* #__PURE__ */ createUseWriteContract({
    abi: iQuestChainTokenFunctionsAbi,
    functionName: 'setApprovalForAll',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iQuestChainTokenFunctionsAbi}__ and `functionName` set to `"setTokenOwner"`
 */
export const useWriteIQuestChainTokenFunctionsSetTokenOwner =
  /* #__PURE__ */ createUseWriteContract({
    abi: iQuestChainTokenFunctionsAbi,
    functionName: 'setTokenOwner',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iQuestChainTokenFunctionsAbi}__ and `functionName` set to `"setTokenURI"`
 */
export const useWriteIQuestChainTokenFunctionsSetTokenUri =
  /* #__PURE__ */ createUseWriteContract({
    abi: iQuestChainTokenFunctionsAbi,
    functionName: 'setTokenURI',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iQuestChainTokenFunctionsAbi}__
 */
export const useSimulateIQuestChainTokenFunctions =
  /* #__PURE__ */ createUseSimulateContract({
    abi: iQuestChainTokenFunctionsAbi,
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iQuestChainTokenFunctionsAbi}__ and `functionName` set to `"burn"`
 */
export const useSimulateIQuestChainTokenFunctionsBurn =
  /* #__PURE__ */ createUseSimulateContract({
    abi: iQuestChainTokenFunctionsAbi,
    functionName: 'burn',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iQuestChainTokenFunctionsAbi}__ and `functionName` set to `"mint"`
 */
export const useSimulateIQuestChainTokenFunctionsMint =
  /* #__PURE__ */ createUseSimulateContract({
    abi: iQuestChainTokenFunctionsAbi,
    functionName: 'mint',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iQuestChainTokenFunctionsAbi}__ and `functionName` set to `"safeBatchTransferFrom"`
 */
export const useSimulateIQuestChainTokenFunctionsSafeBatchTransferFrom =
  /* #__PURE__ */ createUseSimulateContract({
    abi: iQuestChainTokenFunctionsAbi,
    functionName: 'safeBatchTransferFrom',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iQuestChainTokenFunctionsAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useSimulateIQuestChainTokenFunctionsSafeTransferFrom =
  /* #__PURE__ */ createUseSimulateContract({
    abi: iQuestChainTokenFunctionsAbi,
    functionName: 'safeTransferFrom',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iQuestChainTokenFunctionsAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useSimulateIQuestChainTokenFunctionsSetApprovalForAll =
  /* #__PURE__ */ createUseSimulateContract({
    abi: iQuestChainTokenFunctionsAbi,
    functionName: 'setApprovalForAll',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iQuestChainTokenFunctionsAbi}__ and `functionName` set to `"setTokenOwner"`
 */
export const useSimulateIQuestChainTokenFunctionsSetTokenOwner =
  /* #__PURE__ */ createUseSimulateContract({
    abi: iQuestChainTokenFunctionsAbi,
    functionName: 'setTokenOwner',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iQuestChainTokenFunctionsAbi}__ and `functionName` set to `"setTokenURI"`
 */
export const useSimulateIQuestChainTokenFunctionsSetTokenUri =
  /* #__PURE__ */ createUseSimulateContract({
    abi: iQuestChainTokenFunctionsAbi,
    functionName: 'setTokenURI',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iQuestChainTokenFunctionsAbi}__
 */
export const useWatchIQuestChainTokenFunctionsEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: iQuestChainTokenFunctionsAbi,
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iQuestChainTokenFunctionsAbi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const useWatchIQuestChainTokenFunctionsApprovalForAllEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: iQuestChainTokenFunctionsAbi,
    eventName: 'ApprovalForAll',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iQuestChainTokenFunctionsAbi}__ and `eventName` set to `"TransferBatch"`
 */
export const useWatchIQuestChainTokenFunctionsTransferBatchEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: iQuestChainTokenFunctionsAbi,
    eventName: 'TransferBatch',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iQuestChainTokenFunctionsAbi}__ and `eventName` set to `"TransferSingle"`
 */
export const useWatchIQuestChainTokenFunctionsTransferSingleEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: iQuestChainTokenFunctionsAbi,
    eventName: 'TransferSingle',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iQuestChainTokenFunctionsAbi}__ and `eventName` set to `"URI"`
 */
export const useWatchIQuestChainTokenFunctionsUriEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: iQuestChainTokenFunctionsAbi,
    eventName: 'URI',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iSmartInvoiceAbi}__
 */
export const useWriteISmartInvoice = /* #__PURE__ */ createUseWriteContract({
  abi: iSmartInvoiceAbi,
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iSmartInvoiceAbi}__ and `functionName` set to `"init"`
 */
export const useWriteISmartInvoiceInit = /* #__PURE__ */ createUseWriteContract(
  {
    abi: iSmartInvoiceAbi,
    functionName: 'init',
  },
);

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iSmartInvoiceAbi}__
 */
export const useSimulateISmartInvoice =
  /* #__PURE__ */ createUseSimulateContract({ abi: iSmartInvoiceAbi });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iSmartInvoiceAbi}__ and `functionName` set to `"init"`
 */
export const useSimulateISmartInvoiceInit =
  /* #__PURE__ */ createUseSimulateContract({
    abi: iSmartInvoiceAbi,
    functionName: 'init',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iSmartInvoiceEscrowAbi}__
 */
export const useWriteISmartInvoiceEscrow =
  /* #__PURE__ */ createUseWriteContract({ abi: iSmartInvoiceEscrowAbi });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iSmartInvoiceEscrowAbi}__ and `functionName` set to `"addMilestones"`
 */
export const useWriteISmartInvoiceEscrowAddMilestones =
  /* #__PURE__ */ createUseWriteContract({
    abi: iSmartInvoiceEscrowAbi,
    functionName: 'addMilestones',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iSmartInvoiceEscrowAbi}__ and `functionName` set to `"init"`
 */
export const useWriteISmartInvoiceEscrowInit =
  /* #__PURE__ */ createUseWriteContract({
    abi: iSmartInvoiceEscrowAbi,
    functionName: 'init',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iSmartInvoiceEscrowAbi}__ and `functionName` set to `"lock"`
 */
export const useWriteISmartInvoiceEscrowLock =
  /* #__PURE__ */ createUseWriteContract({
    abi: iSmartInvoiceEscrowAbi,
    functionName: 'lock',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iSmartInvoiceEscrowAbi}__ and `functionName` set to `"release"`
 */
export const useWriteISmartInvoiceEscrowRelease =
  /* #__PURE__ */ createUseWriteContract({
    abi: iSmartInvoiceEscrowAbi,
    functionName: 'release',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iSmartInvoiceEscrowAbi}__ and `functionName` set to `"releaseTokens"`
 */
export const useWriteISmartInvoiceEscrowReleaseTokens =
  /* #__PURE__ */ createUseWriteContract({
    abi: iSmartInvoiceEscrowAbi,
    functionName: 'releaseTokens',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iSmartInvoiceEscrowAbi}__ and `functionName` set to `"resolve"`
 */
export const useWriteISmartInvoiceEscrowResolve =
  /* #__PURE__ */ createUseWriteContract({
    abi: iSmartInvoiceEscrowAbi,
    functionName: 'resolve',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iSmartInvoiceEscrowAbi}__ and `functionName` set to `"verify"`
 */
export const useWriteISmartInvoiceEscrowVerify =
  /* #__PURE__ */ createUseWriteContract({
    abi: iSmartInvoiceEscrowAbi,
    functionName: 'verify',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iSmartInvoiceEscrowAbi}__ and `functionName` set to `"withdraw"`
 */
export const useWriteISmartInvoiceEscrowWithdraw =
  /* #__PURE__ */ createUseWriteContract({
    abi: iSmartInvoiceEscrowAbi,
    functionName: 'withdraw',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iSmartInvoiceEscrowAbi}__ and `functionName` set to `"withdrawTokens"`
 */
export const useWriteISmartInvoiceEscrowWithdrawTokens =
  /* #__PURE__ */ createUseWriteContract({
    abi: iSmartInvoiceEscrowAbi,
    functionName: 'withdrawTokens',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iSmartInvoiceEscrowAbi}__
 */
export const useSimulateISmartInvoiceEscrow =
  /* #__PURE__ */ createUseSimulateContract({ abi: iSmartInvoiceEscrowAbi });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iSmartInvoiceEscrowAbi}__ and `functionName` set to `"addMilestones"`
 */
export const useSimulateISmartInvoiceEscrowAddMilestones =
  /* #__PURE__ */ createUseSimulateContract({
    abi: iSmartInvoiceEscrowAbi,
    functionName: 'addMilestones',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iSmartInvoiceEscrowAbi}__ and `functionName` set to `"init"`
 */
export const useSimulateISmartInvoiceEscrowInit =
  /* #__PURE__ */ createUseSimulateContract({
    abi: iSmartInvoiceEscrowAbi,
    functionName: 'init',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iSmartInvoiceEscrowAbi}__ and `functionName` set to `"lock"`
 */
export const useSimulateISmartInvoiceEscrowLock =
  /* #__PURE__ */ createUseSimulateContract({
    abi: iSmartInvoiceEscrowAbi,
    functionName: 'lock',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iSmartInvoiceEscrowAbi}__ and `functionName` set to `"release"`
 */
export const useSimulateISmartInvoiceEscrowRelease =
  /* #__PURE__ */ createUseSimulateContract({
    abi: iSmartInvoiceEscrowAbi,
    functionName: 'release',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iSmartInvoiceEscrowAbi}__ and `functionName` set to `"releaseTokens"`
 */
export const useSimulateISmartInvoiceEscrowReleaseTokens =
  /* #__PURE__ */ createUseSimulateContract({
    abi: iSmartInvoiceEscrowAbi,
    functionName: 'releaseTokens',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iSmartInvoiceEscrowAbi}__ and `functionName` set to `"resolve"`
 */
export const useSimulateISmartInvoiceEscrowResolve =
  /* #__PURE__ */ createUseSimulateContract({
    abi: iSmartInvoiceEscrowAbi,
    functionName: 'resolve',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iSmartInvoiceEscrowAbi}__ and `functionName` set to `"verify"`
 */
export const useSimulateISmartInvoiceEscrowVerify =
  /* #__PURE__ */ createUseSimulateContract({
    abi: iSmartInvoiceEscrowAbi,
    functionName: 'verify',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iSmartInvoiceEscrowAbi}__ and `functionName` set to `"withdraw"`
 */
export const useSimulateISmartInvoiceEscrowWithdraw =
  /* #__PURE__ */ createUseSimulateContract({
    abi: iSmartInvoiceEscrowAbi,
    functionName: 'withdraw',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iSmartInvoiceEscrowAbi}__ and `functionName` set to `"withdrawTokens"`
 */
export const useSimulateISmartInvoiceEscrowWithdrawTokens =
  /* #__PURE__ */ createUseSimulateContract({
    abi: iSmartInvoiceEscrowAbi,
    functionName: 'withdrawTokens',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iSmartInvoiceEscrowAbi}__
 */
export const useWatchISmartInvoiceEscrowEvent =
  /* #__PURE__ */ createUseWatchContractEvent({ abi: iSmartInvoiceEscrowAbi });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iSmartInvoiceEscrowAbi}__ and `eventName` set to `"Deposit"`
 */
export const useWatchISmartInvoiceEscrowDepositEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: iSmartInvoiceEscrowAbi,
    eventName: 'Deposit',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iSmartInvoiceEscrowAbi}__ and `eventName` set to `"DetailsUpdated"`
 */
export const useWatchISmartInvoiceEscrowDetailsUpdatedEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: iSmartInvoiceEscrowAbi,
    eventName: 'DetailsUpdated',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iSmartInvoiceEscrowAbi}__ and `eventName` set to `"Lock"`
 */
export const useWatchISmartInvoiceEscrowLockEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: iSmartInvoiceEscrowAbi,
    eventName: 'Lock',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iSmartInvoiceEscrowAbi}__ and `eventName` set to `"MilestonesAdded"`
 */
export const useWatchISmartInvoiceEscrowMilestonesAddedEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: iSmartInvoiceEscrowAbi,
    eventName: 'MilestonesAdded',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iSmartInvoiceEscrowAbi}__ and `eventName` set to `"Release"`
 */
export const useWatchISmartInvoiceEscrowReleaseEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: iSmartInvoiceEscrowAbi,
    eventName: 'Release',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iSmartInvoiceEscrowAbi}__ and `eventName` set to `"Resolve"`
 */
export const useWatchISmartInvoiceEscrowResolveEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: iSmartInvoiceEscrowAbi,
    eventName: 'Resolve',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iSmartInvoiceEscrowAbi}__ and `eventName` set to `"Rule"`
 */
export const useWatchISmartInvoiceEscrowRuleEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: iSmartInvoiceEscrowAbi,
    eventName: 'Rule',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iSmartInvoiceEscrowAbi}__ and `eventName` set to `"Verified"`
 */
export const useWatchISmartInvoiceEscrowVerifiedEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: iSmartInvoiceEscrowAbi,
    eventName: 'Verified',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iSmartInvoiceEscrowAbi}__ and `eventName` set to `"Withdraw"`
 */
export const useWatchISmartInvoiceEscrowWithdrawEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: iSmartInvoiceEscrowAbi,
    eventName: 'Withdraw',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iSmartInvoiceFactoryAbi}__
 */
export const useReadISmartInvoiceFactory =
  /* #__PURE__ */ createUseReadContract({
    abi: iSmartInvoiceFactoryAbi,
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iSmartInvoiceFactoryAbi}__ and `functionName` set to `"resolutionRateOf"`
 */
export const useReadISmartInvoiceFactoryResolutionRateOf =
  /* #__PURE__ */ createUseReadContract({
    abi: iSmartInvoiceFactoryAbi,
    functionName: 'resolutionRateOf',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iSmartInvoiceFactoryAbi}__
 */
export const useWriteISmartInvoiceFactory =
  /* #__PURE__ */ createUseWriteContract({ abi: iSmartInvoiceFactoryAbi });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iSmartInvoiceFactoryAbi}__ and `functionName` set to `"create"`
 */
export const useWriteISmartInvoiceFactoryCreate =
  /* #__PURE__ */ createUseWriteContract({
    abi: iSmartInvoiceFactoryAbi,
    functionName: 'create',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iSmartInvoiceFactoryAbi}__ and `functionName` set to `"createDeterministic"`
 */
export const useWriteISmartInvoiceFactoryCreateDeterministic =
  /* #__PURE__ */ createUseWriteContract({
    abi: iSmartInvoiceFactoryAbi,
    functionName: 'createDeterministic',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iSmartInvoiceFactoryAbi}__ and `functionName` set to `"predictDeterministicAddress"`
 */
export const useWriteISmartInvoiceFactoryPredictDeterministicAddress =
  /* #__PURE__ */ createUseWriteContract({
    abi: iSmartInvoiceFactoryAbi,
    functionName: 'predictDeterministicAddress',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iSmartInvoiceFactoryAbi}__
 */
export const useSimulateISmartInvoiceFactory =
  /* #__PURE__ */ createUseSimulateContract({ abi: iSmartInvoiceFactoryAbi });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iSmartInvoiceFactoryAbi}__ and `functionName` set to `"create"`
 */
export const useSimulateISmartInvoiceFactoryCreate =
  /* #__PURE__ */ createUseSimulateContract({
    abi: iSmartInvoiceFactoryAbi,
    functionName: 'create',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iSmartInvoiceFactoryAbi}__ and `functionName` set to `"createDeterministic"`
 */
export const useSimulateISmartInvoiceFactoryCreateDeterministic =
  /* #__PURE__ */ createUseSimulateContract({
    abi: iSmartInvoiceFactoryAbi,
    functionName: 'createDeterministic',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iSmartInvoiceFactoryAbi}__ and `functionName` set to `"predictDeterministicAddress"`
 */
export const useSimulateISmartInvoiceFactoryPredictDeterministicAddress =
  /* #__PURE__ */ createUseSimulateContract({
    abi: iSmartInvoiceFactoryAbi,
    functionName: 'predictDeterministicAddress',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iSmartInvoiceFactoryAbi}__
 */
export const useWatchISmartInvoiceFactoryEvent =
  /* #__PURE__ */ createUseWatchContractEvent({ abi: iSmartInvoiceFactoryAbi });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iSmartInvoiceFactoryAbi}__ and `eventName` set to `"AddImplementation"`
 */
export const useWatchISmartInvoiceFactoryAddImplementationEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: iSmartInvoiceFactoryAbi,
    eventName: 'AddImplementation',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iSmartInvoiceFactoryAbi}__ and `eventName` set to `"LogNewInvoice"`
 */
export const useWatchISmartInvoiceFactoryLogNewInvoiceEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: iSmartInvoiceFactoryAbi,
    eventName: 'LogNewInvoice',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iSmartInvoiceFactoryAbi}__ and `eventName` set to `"SmartInvoiceFactoryInit"`
 */
export const useWatchISmartInvoiceFactorySmartInvoiceFactoryInitEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: iSmartInvoiceFactoryAbi,
    eventName: 'SmartInvoiceFactoryInit',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iSmartInvoiceFactoryAbi}__ and `eventName` set to `"UpdateResolutionRate"`
 */
export const useWatchISmartInvoiceFactoryUpdateResolutionRateEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: iSmartInvoiceFactoryAbi,
    eventName: 'UpdateResolutionRate',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iwrappedAbi}__
 */
export const useWriteIwrapped = /* #__PURE__ */ createUseWriteContract({
  abi: iwrappedAbi,
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iwrappedAbi}__ and `functionName` set to `"deposit"`
 */
export const useWriteIwrappedDeposit = /* #__PURE__ */ createUseWriteContract({
  abi: iwrappedAbi,
  functionName: 'deposit',
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iwrappedAbi}__
 */
export const useSimulateIwrapped = /* #__PURE__ */ createUseSimulateContract({
  abi: iwrappedAbi,
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iwrappedAbi}__ and `functionName` set to `"deposit"`
 */
export const useSimulateIwrappedDeposit =
  /* #__PURE__ */ createUseSimulateContract({
    abi: iwrappedAbi,
    functionName: 'deposit',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link initializableAbi}__
 */
export const useWatchInitializableEvent =
  /* #__PURE__ */ createUseWatchContractEvent({ abi: initializableAbi });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link initializableAbi}__ and `eventName` set to `"Initialized"`
 */
export const useWatchInitializableInitializedEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: initializableAbi,
    eventName: 'Initialized',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link limiterTokenFeeAbi}__
 */
export const useReadLimiterTokenFee = /* #__PURE__ */ createUseReadContract({
  abi: limiterTokenFeeAbi,
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link limiterTokenFeeAbi}__ and `functionName` set to `"questChainDetails"`
 */
export const useReadLimiterTokenFeeQuestChainDetails =
  /* #__PURE__ */ createUseReadContract({
    abi: limiterTokenFeeAbi,
    functionName: 'questChainDetails',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link limiterTokenFeeAbi}__
 */
export const useWriteLimiterTokenFee = /* #__PURE__ */ createUseWriteContract({
  abi: limiterTokenFeeAbi,
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link limiterTokenFeeAbi}__ and `functionName` set to `"addQuestChainDetails"`
 */
export const useWriteLimiterTokenFeeAddQuestChainDetails =
  /* #__PURE__ */ createUseWriteContract({
    abi: limiterTokenFeeAbi,
    functionName: 'addQuestChainDetails',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link limiterTokenFeeAbi}__ and `functionName` set to `"submitProofLimiter"`
 */
export const useWriteLimiterTokenFeeSubmitProofLimiter =
  /* #__PURE__ */ createUseWriteContract({
    abi: limiterTokenFeeAbi,
    functionName: 'submitProofLimiter',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link limiterTokenFeeAbi}__
 */
export const useSimulateLimiterTokenFee =
  /* #__PURE__ */ createUseSimulateContract({ abi: limiterTokenFeeAbi });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link limiterTokenFeeAbi}__ and `functionName` set to `"addQuestChainDetails"`
 */
export const useSimulateLimiterTokenFeeAddQuestChainDetails =
  /* #__PURE__ */ createUseSimulateContract({
    abi: limiterTokenFeeAbi,
    functionName: 'addQuestChainDetails',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link limiterTokenFeeAbi}__ and `functionName` set to `"submitProofLimiter"`
 */
export const useSimulateLimiterTokenFeeSubmitProofLimiter =
  /* #__PURE__ */ createUseSimulateContract({
    abi: limiterTokenFeeAbi,
    functionName: 'submitProofLimiter',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link limiterTokenFeeAbi}__
 */
export const useWatchLimiterTokenFeeEvent =
  /* #__PURE__ */ createUseWatchContractEvent({ abi: limiterTokenFeeAbi });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link limiterTokenFeeAbi}__ and `eventName` set to `"AddQuestChainDetails"`
 */
export const useWatchLimiterTokenFeeAddQuestChainDetailsEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: limiterTokenFeeAbi,
    eventName: 'AddQuestChainDetails',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link limiterTokenGatedAbi}__
 */
export const useReadLimiterTokenGated = /* #__PURE__ */ createUseReadContract({
  abi: limiterTokenGatedAbi,
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link limiterTokenGatedAbi}__ and `functionName` set to `"questChainDetails"`
 */
export const useReadLimiterTokenGatedQuestChainDetails =
  /* #__PURE__ */ createUseReadContract({
    abi: limiterTokenGatedAbi,
    functionName: 'questChainDetails',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link limiterTokenGatedAbi}__ and `functionName` set to `"submitProofLimiter"`
 */
export const useReadLimiterTokenGatedSubmitProofLimiter =
  /* #__PURE__ */ createUseReadContract({
    abi: limiterTokenGatedAbi,
    functionName: 'submitProofLimiter',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link limiterTokenGatedAbi}__
 */
export const useWriteLimiterTokenGated = /* #__PURE__ */ createUseWriteContract(
  {
    abi: limiterTokenGatedAbi,
  },
);

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link limiterTokenGatedAbi}__ and `functionName` set to `"addQuestChainDetails"`
 */
export const useWriteLimiterTokenGatedAddQuestChainDetails =
  /* #__PURE__ */ createUseWriteContract({
    abi: limiterTokenGatedAbi,
    functionName: 'addQuestChainDetails',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link limiterTokenGatedAbi}__
 */
export const useSimulateLimiterTokenGated =
  /* #__PURE__ */ createUseSimulateContract({ abi: limiterTokenGatedAbi });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link limiterTokenGatedAbi}__ and `functionName` set to `"addQuestChainDetails"`
 */
export const useSimulateLimiterTokenGatedAddQuestChainDetails =
  /* #__PURE__ */ createUseSimulateContract({
    abi: limiterTokenGatedAbi,
    functionName: 'addQuestChainDetails',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link limiterTokenGatedAbi}__
 */
export const useWatchLimiterTokenGatedEvent =
  /* #__PURE__ */ createUseWatchContractEvent({ abi: limiterTokenGatedAbi });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link limiterTokenGatedAbi}__ and `eventName` set to `"AddQuestChainDetails"`
 */
export const useWatchLimiterTokenGatedAddQuestChainDetailsEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: limiterTokenGatedAbi,
    eventName: 'AddQuestChainDetails',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mockTokenAbi}__
 */
export const useReadMockToken = /* #__PURE__ */ createUseReadContract({
  abi: mockTokenAbi,
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mockTokenAbi}__ and `functionName` set to `"allowance"`
 */
export const useReadMockTokenAllowance = /* #__PURE__ */ createUseReadContract({
  abi: mockTokenAbi,
  functionName: 'allowance',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mockTokenAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadMockTokenBalanceOf = /* #__PURE__ */ createUseReadContract({
  abi: mockTokenAbi,
  functionName: 'balanceOf',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mockTokenAbi}__ and `functionName` set to `"decimals"`
 */
export const useReadMockTokenDecimals = /* #__PURE__ */ createUseReadContract({
  abi: mockTokenAbi,
  functionName: 'decimals',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mockTokenAbi}__ and `functionName` set to `"name"`
 */
export const useReadMockTokenName = /* #__PURE__ */ createUseReadContract({
  abi: mockTokenAbi,
  functionName: 'name',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mockTokenAbi}__ and `functionName` set to `"symbol"`
 */
export const useReadMockTokenSymbol = /* #__PURE__ */ createUseReadContract({
  abi: mockTokenAbi,
  functionName: 'symbol',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mockTokenAbi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadMockTokenTotalSupply =
  /* #__PURE__ */ createUseReadContract({
    abi: mockTokenAbi,
    functionName: 'totalSupply',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link mockTokenAbi}__
 */
export const useWriteMockToken = /* #__PURE__ */ createUseWriteContract({
  abi: mockTokenAbi,
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link mockTokenAbi}__ and `functionName` set to `"approve"`
 */
export const useWriteMockTokenApprove = /* #__PURE__ */ createUseWriteContract({
  abi: mockTokenAbi,
  functionName: 'approve',
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link mockTokenAbi}__ and `functionName` set to `"mint"`
 */
export const useWriteMockTokenMint = /* #__PURE__ */ createUseWriteContract({
  abi: mockTokenAbi,
  functionName: 'mint',
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link mockTokenAbi}__ and `functionName` set to `"setBalanceOf"`
 */
export const useWriteMockTokenSetBalanceOf =
  /* #__PURE__ */ createUseWriteContract({
    abi: mockTokenAbi,
    functionName: 'setBalanceOf',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link mockTokenAbi}__ and `functionName` set to `"transfer"`
 */
export const useWriteMockTokenTransfer = /* #__PURE__ */ createUseWriteContract(
  {
    abi: mockTokenAbi,
    functionName: 'transfer',
  },
);

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link mockTokenAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteMockTokenTransferFrom =
  /* #__PURE__ */ createUseWriteContract({
    abi: mockTokenAbi,
    functionName: 'transferFrom',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link mockTokenAbi}__
 */
export const useSimulateMockToken = /* #__PURE__ */ createUseSimulateContract({
  abi: mockTokenAbi,
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link mockTokenAbi}__ and `functionName` set to `"approve"`
 */
export const useSimulateMockTokenApprove =
  /* #__PURE__ */ createUseSimulateContract({
    abi: mockTokenAbi,
    functionName: 'approve',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link mockTokenAbi}__ and `functionName` set to `"mint"`
 */
export const useSimulateMockTokenMint =
  /* #__PURE__ */ createUseSimulateContract({
    abi: mockTokenAbi,
    functionName: 'mint',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link mockTokenAbi}__ and `functionName` set to `"setBalanceOf"`
 */
export const useSimulateMockTokenSetBalanceOf =
  /* #__PURE__ */ createUseSimulateContract({
    abi: mockTokenAbi,
    functionName: 'setBalanceOf',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link mockTokenAbi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateMockTokenTransfer =
  /* #__PURE__ */ createUseSimulateContract({
    abi: mockTokenAbi,
    functionName: 'transfer',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link mockTokenAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateMockTokenTransferFrom =
  /* #__PURE__ */ createUseSimulateContract({
    abi: mockTokenAbi,
    functionName: 'transferFrom',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link mockTokenAbi}__
 */
export const useWatchMockTokenEvent =
  /* #__PURE__ */ createUseWatchContractEvent({ abi: mockTokenAbi });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link mockTokenAbi}__ and `eventName` set to `"Approval"`
 */
export const useWatchMockTokenApprovalEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: mockTokenAbi,
    eventName: 'Approval',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link mockTokenAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchMockTokenTransferEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: mockTokenAbi,
    eventName: 'Transfer',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mockWethAbi}__
 */
export const useReadMockWeth = /* #__PURE__ */ createUseReadContract({
  abi: mockWethAbi,
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mockWethAbi}__ and `functionName` set to `"allowance"`
 */
export const useReadMockWethAllowance = /* #__PURE__ */ createUseReadContract({
  abi: mockWethAbi,
  functionName: 'allowance',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mockWethAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadMockWethBalanceOf = /* #__PURE__ */ createUseReadContract({
  abi: mockWethAbi,
  functionName: 'balanceOf',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mockWethAbi}__ and `functionName` set to `"decimals"`
 */
export const useReadMockWethDecimals = /* #__PURE__ */ createUseReadContract({
  abi: mockWethAbi,
  functionName: 'decimals',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mockWethAbi}__ and `functionName` set to `"name"`
 */
export const useReadMockWethName = /* #__PURE__ */ createUseReadContract({
  abi: mockWethAbi,
  functionName: 'name',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mockWethAbi}__ and `functionName` set to `"symbol"`
 */
export const useReadMockWethSymbol = /* #__PURE__ */ createUseReadContract({
  abi: mockWethAbi,
  functionName: 'symbol',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mockWethAbi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadMockWethTotalSupply = /* #__PURE__ */ createUseReadContract(
  {
    abi: mockWethAbi,
    functionName: 'totalSupply',
  },
);

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link mockWethAbi}__
 */
export const useWriteMockWeth = /* #__PURE__ */ createUseWriteContract({
  abi: mockWethAbi,
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link mockWethAbi}__ and `functionName` set to `"approve"`
 */
export const useWriteMockWethApprove = /* #__PURE__ */ createUseWriteContract({
  abi: mockWethAbi,
  functionName: 'approve',
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link mockWethAbi}__ and `functionName` set to `"deposit"`
 */
export const useWriteMockWethDeposit = /* #__PURE__ */ createUseWriteContract({
  abi: mockWethAbi,
  functionName: 'deposit',
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link mockWethAbi}__ and `functionName` set to `"transfer"`
 */
export const useWriteMockWethTransfer = /* #__PURE__ */ createUseWriteContract({
  abi: mockWethAbi,
  functionName: 'transfer',
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link mockWethAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteMockWethTransferFrom =
  /* #__PURE__ */ createUseWriteContract({
    abi: mockWethAbi,
    functionName: 'transferFrom',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link mockWethAbi}__ and `functionName` set to `"withdraw"`
 */
export const useWriteMockWethWithdraw = /* #__PURE__ */ createUseWriteContract({
  abi: mockWethAbi,
  functionName: 'withdraw',
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link mockWethAbi}__
 */
export const useSimulateMockWeth = /* #__PURE__ */ createUseSimulateContract({
  abi: mockWethAbi,
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link mockWethAbi}__ and `functionName` set to `"approve"`
 */
export const useSimulateMockWethApprove =
  /* #__PURE__ */ createUseSimulateContract({
    abi: mockWethAbi,
    functionName: 'approve',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link mockWethAbi}__ and `functionName` set to `"deposit"`
 */
export const useSimulateMockWethDeposit =
  /* #__PURE__ */ createUseSimulateContract({
    abi: mockWethAbi,
    functionName: 'deposit',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link mockWethAbi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateMockWethTransfer =
  /* #__PURE__ */ createUseSimulateContract({
    abi: mockWethAbi,
    functionName: 'transfer',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link mockWethAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateMockWethTransferFrom =
  /* #__PURE__ */ createUseSimulateContract({
    abi: mockWethAbi,
    functionName: 'transferFrom',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link mockWethAbi}__ and `functionName` set to `"withdraw"`
 */
export const useSimulateMockWethWithdraw =
  /* #__PURE__ */ createUseSimulateContract({
    abi: mockWethAbi,
    functionName: 'withdraw',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link mockWethAbi}__
 */
export const useWatchMockWethEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: mockWethAbi,
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link mockWethAbi}__ and `eventName` set to `"Approval"`
 */
export const useWatchMockWethApprovalEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: mockWethAbi,
    eventName: 'Approval',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link mockWethAbi}__ and `eventName` set to `"Deposit"`
 */
export const useWatchMockWethDepositEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: mockWethAbi,
    eventName: 'Deposit',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link mockWethAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchMockWethTransferEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: mockWethAbi,
    eventName: 'Transfer',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link mockWethAbi}__ and `eventName` set to `"Withdrawal"`
 */
export const useWatchMockWethWithdrawalEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: mockWethAbi,
    eventName: 'Withdrawal',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pausableAbi}__
 */
export const useReadPausable = /* #__PURE__ */ createUseReadContract({
  abi: pausableAbi,
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pausableAbi}__ and `functionName` set to `"paused"`
 */
export const useReadPausablePaused = /* #__PURE__ */ createUseReadContract({
  abi: pausableAbi,
  functionName: 'paused',
});

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link pausableAbi}__
 */
export const useWatchPausableEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: pausableAbi,
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link pausableAbi}__ and `eventName` set to `"Paused"`
 */
export const useWatchPausablePausedEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: pausableAbi,
    eventName: 'Paused',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link pausableAbi}__ and `eventName` set to `"Unpaused"`
 */
export const useWatchPausableUnpausedEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: pausableAbi,
    eventName: 'Unpaused',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link questChainAbi}__
 */
export const useReadQuestChain = /* #__PURE__ */ createUseReadContract({
  abi: questChainAbi,
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link questChainAbi}__ and `functionName` set to `"ADMIN_ROLE"`
 */
export const useReadQuestChainAdminRole = /* #__PURE__ */ createUseReadContract(
  {
    abi: questChainAbi,
    functionName: 'ADMIN_ROLE',
  },
);

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link questChainAbi}__ and `functionName` set to `"DEFAULT_ADMIN_ROLE"`
 */
export const useReadQuestChainDefaultAdminRole =
  /* #__PURE__ */ createUseReadContract({
    abi: questChainAbi,
    functionName: 'DEFAULT_ADMIN_ROLE',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link questChainAbi}__ and `functionName` set to `"EDITOR_ROLE"`
 */
export const useReadQuestChainEditorRole =
  /* #__PURE__ */ createUseReadContract({
    abi: questChainAbi,
    functionName: 'EDITOR_ROLE',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link questChainAbi}__ and `functionName` set to `"REVIEWER_ROLE"`
 */
export const useReadQuestChainReviewerRole =
  /* #__PURE__ */ createUseReadContract({
    abi: questChainAbi,
    functionName: 'REVIEWER_ROLE',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link questChainAbi}__ and `functionName` set to `"details"`
 */
export const useReadQuestChainDetails = /* #__PURE__ */ createUseReadContract({
  abi: questChainAbi,
  functionName: 'details',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link questChainAbi}__ and `functionName` set to `"getRoleAdmin"`
 */
export const useReadQuestChainGetRoleAdmin =
  /* #__PURE__ */ createUseReadContract({
    abi: questChainAbi,
    functionName: 'getRoleAdmin',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link questChainAbi}__ and `functionName` set to `"getTokenURI"`
 */
export const useReadQuestChainGetTokenUri =
  /* #__PURE__ */ createUseReadContract({
    abi: questChainAbi,
    functionName: 'getTokenURI',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link questChainAbi}__ and `functionName` set to `"hasRole"`
 */
export const useReadQuestChainHasRole = /* #__PURE__ */ createUseReadContract({
  abi: questChainAbi,
  functionName: 'hasRole',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link questChainAbi}__ and `functionName` set to `"limiterContract"`
 */
export const useReadQuestChainLimiterContract =
  /* #__PURE__ */ createUseReadContract({
    abi: questChainAbi,
    functionName: 'limiterContract',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link questChainAbi}__ and `functionName` set to `"paused"`
 */
export const useReadQuestChainPaused = /* #__PURE__ */ createUseReadContract({
  abi: questChainAbi,
  functionName: 'paused',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link questChainAbi}__ and `functionName` set to `"questChainFactory"`
 */
export const useReadQuestChainQuestChainFactory =
  /* #__PURE__ */ createUseReadContract({
    abi: questChainAbi,
    functionName: 'questChainFactory',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link questChainAbi}__ and `functionName` set to `"questChainId"`
 */
export const useReadQuestChainQuestChainId =
  /* #__PURE__ */ createUseReadContract({
    abi: questChainAbi,
    functionName: 'questChainId',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link questChainAbi}__ and `functionName` set to `"questChainToken"`
 */
export const useReadQuestChainQuestChainToken =
  /* #__PURE__ */ createUseReadContract({
    abi: questChainAbi,
    functionName: 'questChainToken',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link questChainAbi}__ and `functionName` set to `"questCount"`
 */
export const useReadQuestChainQuestCount =
  /* #__PURE__ */ createUseReadContract({
    abi: questChainAbi,
    functionName: 'questCount',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link questChainAbi}__ and `functionName` set to `"questDetails"`
 */
export const useReadQuestChainQuestDetails =
  /* #__PURE__ */ createUseReadContract({
    abi: questChainAbi,
    functionName: 'questDetails',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link questChainAbi}__ and `functionName` set to `"questStatus"`
 */
export const useReadQuestChainQuestStatus =
  /* #__PURE__ */ createUseReadContract({
    abi: questChainAbi,
    functionName: 'questStatus',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link questChainAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadQuestChainSupportsInterface =
  /* #__PURE__ */ createUseReadContract({
    abi: questChainAbi,
    functionName: 'supportsInterface',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link questChainAbi}__
 */
export const useWriteQuestChain = /* #__PURE__ */ createUseWriteContract({
  abi: questChainAbi,
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link questChainAbi}__ and `functionName` set to `"addQuests"`
 */
export const useWriteQuestChainAddQuests =
  /* #__PURE__ */ createUseWriteContract({
    abi: questChainAbi,
    functionName: 'addQuests',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link questChainAbi}__ and `functionName` set to `"burnToken"`
 */
export const useWriteQuestChainBurnToken =
  /* #__PURE__ */ createUseWriteContract({
    abi: questChainAbi,
    functionName: 'burnToken',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link questChainAbi}__ and `functionName` set to `"edit"`
 */
export const useWriteQuestChainEdit = /* #__PURE__ */ createUseWriteContract({
  abi: questChainAbi,
  functionName: 'edit',
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link questChainAbi}__ and `functionName` set to `"editQuests"`
 */
export const useWriteQuestChainEditQuests =
  /* #__PURE__ */ createUseWriteContract({
    abi: questChainAbi,
    functionName: 'editQuests',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link questChainAbi}__ and `functionName` set to `"grantRole"`
 */
export const useWriteQuestChainGrantRole =
  /* #__PURE__ */ createUseWriteContract({
    abi: questChainAbi,
    functionName: 'grantRole',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link questChainAbi}__ and `functionName` set to `"init"`
 */
export const useWriteQuestChainInit = /* #__PURE__ */ createUseWriteContract({
  abi: questChainAbi,
  functionName: 'init',
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link questChainAbi}__ and `functionName` set to `"mintToken"`
 */
export const useWriteQuestChainMintToken =
  /* #__PURE__ */ createUseWriteContract({
    abi: questChainAbi,
    functionName: 'mintToken',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link questChainAbi}__ and `functionName` set to `"pause"`
 */
export const useWriteQuestChainPause = /* #__PURE__ */ createUseWriteContract({
  abi: questChainAbi,
  functionName: 'pause',
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link questChainAbi}__ and `functionName` set to `"renounceRole"`
 */
export const useWriteQuestChainRenounceRole =
  /* #__PURE__ */ createUseWriteContract({
    abi: questChainAbi,
    functionName: 'renounceRole',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link questChainAbi}__ and `functionName` set to `"reviewProofs"`
 */
export const useWriteQuestChainReviewProofs =
  /* #__PURE__ */ createUseWriteContract({
    abi: questChainAbi,
    functionName: 'reviewProofs',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link questChainAbi}__ and `functionName` set to `"revokeRole"`
 */
export const useWriteQuestChainRevokeRole =
  /* #__PURE__ */ createUseWriteContract({
    abi: questChainAbi,
    functionName: 'revokeRole',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link questChainAbi}__ and `functionName` set to `"setLimiter"`
 */
export const useWriteQuestChainSetLimiter =
  /* #__PURE__ */ createUseWriteContract({
    abi: questChainAbi,
    functionName: 'setLimiter',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link questChainAbi}__ and `functionName` set to `"setTokenURI"`
 */
export const useWriteQuestChainSetTokenUri =
  /* #__PURE__ */ createUseWriteContract({
    abi: questChainAbi,
    functionName: 'setTokenURI',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link questChainAbi}__ and `functionName` set to `"submitProofs"`
 */
export const useWriteQuestChainSubmitProofs =
  /* #__PURE__ */ createUseWriteContract({
    abi: questChainAbi,
    functionName: 'submitProofs',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link questChainAbi}__ and `functionName` set to `"unpause"`
 */
export const useWriteQuestChainUnpause = /* #__PURE__ */ createUseWriteContract(
  {
    abi: questChainAbi,
    functionName: 'unpause',
  },
);

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link questChainAbi}__
 */
export const useSimulateQuestChain = /* #__PURE__ */ createUseSimulateContract({
  abi: questChainAbi,
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link questChainAbi}__ and `functionName` set to `"addQuests"`
 */
export const useSimulateQuestChainAddQuests =
  /* #__PURE__ */ createUseSimulateContract({
    abi: questChainAbi,
    functionName: 'addQuests',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link questChainAbi}__ and `functionName` set to `"burnToken"`
 */
export const useSimulateQuestChainBurnToken =
  /* #__PURE__ */ createUseSimulateContract({
    abi: questChainAbi,
    functionName: 'burnToken',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link questChainAbi}__ and `functionName` set to `"edit"`
 */
export const useSimulateQuestChainEdit =
  /* #__PURE__ */ createUseSimulateContract({
    abi: questChainAbi,
    functionName: 'edit',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link questChainAbi}__ and `functionName` set to `"editQuests"`
 */
export const useSimulateQuestChainEditQuests =
  /* #__PURE__ */ createUseSimulateContract({
    abi: questChainAbi,
    functionName: 'editQuests',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link questChainAbi}__ and `functionName` set to `"grantRole"`
 */
export const useSimulateQuestChainGrantRole =
  /* #__PURE__ */ createUseSimulateContract({
    abi: questChainAbi,
    functionName: 'grantRole',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link questChainAbi}__ and `functionName` set to `"init"`
 */
export const useSimulateQuestChainInit =
  /* #__PURE__ */ createUseSimulateContract({
    abi: questChainAbi,
    functionName: 'init',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link questChainAbi}__ and `functionName` set to `"mintToken"`
 */
export const useSimulateQuestChainMintToken =
  /* #__PURE__ */ createUseSimulateContract({
    abi: questChainAbi,
    functionName: 'mintToken',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link questChainAbi}__ and `functionName` set to `"pause"`
 */
export const useSimulateQuestChainPause =
  /* #__PURE__ */ createUseSimulateContract({
    abi: questChainAbi,
    functionName: 'pause',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link questChainAbi}__ and `functionName` set to `"renounceRole"`
 */
export const useSimulateQuestChainRenounceRole =
  /* #__PURE__ */ createUseSimulateContract({
    abi: questChainAbi,
    functionName: 'renounceRole',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link questChainAbi}__ and `functionName` set to `"reviewProofs"`
 */
export const useSimulateQuestChainReviewProofs =
  /* #__PURE__ */ createUseSimulateContract({
    abi: questChainAbi,
    functionName: 'reviewProofs',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link questChainAbi}__ and `functionName` set to `"revokeRole"`
 */
export const useSimulateQuestChainRevokeRole =
  /* #__PURE__ */ createUseSimulateContract({
    abi: questChainAbi,
    functionName: 'revokeRole',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link questChainAbi}__ and `functionName` set to `"setLimiter"`
 */
export const useSimulateQuestChainSetLimiter =
  /* #__PURE__ */ createUseSimulateContract({
    abi: questChainAbi,
    functionName: 'setLimiter',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link questChainAbi}__ and `functionName` set to `"setTokenURI"`
 */
export const useSimulateQuestChainSetTokenUri =
  /* #__PURE__ */ createUseSimulateContract({
    abi: questChainAbi,
    functionName: 'setTokenURI',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link questChainAbi}__ and `functionName` set to `"submitProofs"`
 */
export const useSimulateQuestChainSubmitProofs =
  /* #__PURE__ */ createUseSimulateContract({
    abi: questChainAbi,
    functionName: 'submitProofs',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link questChainAbi}__ and `functionName` set to `"unpause"`
 */
export const useSimulateQuestChainUnpause =
  /* #__PURE__ */ createUseSimulateContract({
    abi: questChainAbi,
    functionName: 'unpause',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link questChainAbi}__
 */
export const useWatchQuestChainEvent =
  /* #__PURE__ */ createUseWatchContractEvent({ abi: questChainAbi });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link questChainAbi}__ and `eventName` set to `"Initialized"`
 */
export const useWatchQuestChainInitializedEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: questChainAbi,
    eventName: 'Initialized',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link questChainAbi}__ and `eventName` set to `"Paused"`
 */
export const useWatchQuestChainPausedEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: questChainAbi,
    eventName: 'Paused',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link questChainAbi}__ and `eventName` set to `"QuestChainEdited"`
 */
export const useWatchQuestChainQuestChainEditedEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: questChainAbi,
    eventName: 'QuestChainEdited',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link questChainAbi}__ and `eventName` set to `"QuestChainInit"`
 */
export const useWatchQuestChainQuestChainInitEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: questChainAbi,
    eventName: 'QuestChainInit',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link questChainAbi}__ and `eventName` set to `"QuestChainTokenURIUpdated"`
 */
export const useWatchQuestChainQuestChainTokenUriUpdatedEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: questChainAbi,
    eventName: 'QuestChainTokenURIUpdated',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link questChainAbi}__ and `eventName` set to `"QuestProofsReviewed"`
 */
export const useWatchQuestChainQuestProofsReviewedEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: questChainAbi,
    eventName: 'QuestProofsReviewed',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link questChainAbi}__ and `eventName` set to `"QuestProofsSubmitted"`
 */
export const useWatchQuestChainQuestProofsSubmittedEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: questChainAbi,
    eventName: 'QuestProofsSubmitted',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link questChainAbi}__ and `eventName` set to `"QuestsAdded"`
 */
export const useWatchQuestChainQuestsAddedEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: questChainAbi,
    eventName: 'QuestsAdded',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link questChainAbi}__ and `eventName` set to `"QuestsEdited"`
 */
export const useWatchQuestChainQuestsEditedEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: questChainAbi,
    eventName: 'QuestsEdited',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link questChainAbi}__ and `eventName` set to `"RoleAdminChanged"`
 */
export const useWatchQuestChainRoleAdminChangedEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: questChainAbi,
    eventName: 'RoleAdminChanged',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link questChainAbi}__ and `eventName` set to `"RoleGranted"`
 */
export const useWatchQuestChainRoleGrantedEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: questChainAbi,
    eventName: 'RoleGranted',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link questChainAbi}__ and `eventName` set to `"RoleRevoked"`
 */
export const useWatchQuestChainRoleRevokedEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: questChainAbi,
    eventName: 'RoleRevoked',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link questChainAbi}__ and `eventName` set to `"SetLimiter"`
 */
export const useWatchQuestChainSetLimiterEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: questChainAbi,
    eventName: 'SetLimiter',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link questChainAbi}__ and `eventName` set to `"Unpaused"`
 */
export const useWatchQuestChainUnpausedEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: questChainAbi,
    eventName: 'Unpaused',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link questChainFactoryAbi}__
 */
export const useReadQuestChainFactory = /* #__PURE__ */ createUseReadContract({
  abi: questChainFactoryAbi,
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link questChainFactoryAbi}__ and `functionName` set to `"admin"`
 */
export const useReadQuestChainFactoryAdmin =
  /* #__PURE__ */ createUseReadContract({
    abi: questChainFactoryAbi,
    functionName: 'admin',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link questChainFactoryAbi}__ and `functionName` set to `"adminProposalTimestamp"`
 */
export const useReadQuestChainFactoryAdminProposalTimestamp =
  /* #__PURE__ */ createUseReadContract({
    abi: questChainFactoryAbi,
    functionName: 'adminProposalTimestamp',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link questChainFactoryAbi}__ and `functionName` set to `"getQuestChainAddress"`
 */
export const useReadQuestChainFactoryGetQuestChainAddress =
  /* #__PURE__ */ createUseReadContract({
    abi: questChainFactoryAbi,
    functionName: 'getQuestChainAddress',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link questChainFactoryAbi}__ and `functionName` set to `"proposedAdmin"`
 */
export const useReadQuestChainFactoryProposedAdmin =
  /* #__PURE__ */ createUseReadContract({
    abi: questChainFactoryAbi,
    functionName: 'proposedAdmin',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link questChainFactoryAbi}__ and `functionName` set to `"questChainCount"`
 */
export const useReadQuestChainFactoryQuestChainCount =
  /* #__PURE__ */ createUseReadContract({
    abi: questChainFactoryAbi,
    functionName: 'questChainCount',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link questChainFactoryAbi}__ and `functionName` set to `"questChainTemplate"`
 */
export const useReadQuestChainFactoryQuestChainTemplate =
  /* #__PURE__ */ createUseReadContract({
    abi: questChainFactoryAbi,
    functionName: 'questChainTemplate',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link questChainFactoryAbi}__ and `functionName` set to `"questChainToken"`
 */
export const useReadQuestChainFactoryQuestChainToken =
  /* #__PURE__ */ createUseReadContract({
    abi: questChainFactoryAbi,
    functionName: 'questChainToken',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link questChainFactoryAbi}__
 */
export const useWriteQuestChainFactory = /* #__PURE__ */ createUseWriteContract(
  {
    abi: questChainFactoryAbi,
  },
);

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link questChainFactoryAbi}__ and `functionName` set to `"create"`
 */
export const useWriteQuestChainFactoryCreate =
  /* #__PURE__ */ createUseWriteContract({
    abi: questChainFactoryAbi,
    functionName: 'create',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link questChainFactoryAbi}__ and `functionName` set to `"executeAdminReplace"`
 */
export const useWriteQuestChainFactoryExecuteAdminReplace =
  /* #__PURE__ */ createUseWriteContract({
    abi: questChainFactoryAbi,
    functionName: 'executeAdminReplace',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link questChainFactoryAbi}__ and `functionName` set to `"proposeAdminReplace"`
 */
export const useWriteQuestChainFactoryProposeAdminReplace =
  /* #__PURE__ */ createUseWriteContract({
    abi: questChainFactoryAbi,
    functionName: 'proposeAdminReplace',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link questChainFactoryAbi}__
 */
export const useSimulateQuestChainFactory =
  /* #__PURE__ */ createUseSimulateContract({ abi: questChainFactoryAbi });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link questChainFactoryAbi}__ and `functionName` set to `"create"`
 */
export const useSimulateQuestChainFactoryCreate =
  /* #__PURE__ */ createUseSimulateContract({
    abi: questChainFactoryAbi,
    functionName: 'create',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link questChainFactoryAbi}__ and `functionName` set to `"executeAdminReplace"`
 */
export const useSimulateQuestChainFactoryExecuteAdminReplace =
  /* #__PURE__ */ createUseSimulateContract({
    abi: questChainFactoryAbi,
    functionName: 'executeAdminReplace',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link questChainFactoryAbi}__ and `functionName` set to `"proposeAdminReplace"`
 */
export const useSimulateQuestChainFactoryProposeAdminReplace =
  /* #__PURE__ */ createUseSimulateContract({
    abi: questChainFactoryAbi,
    functionName: 'proposeAdminReplace',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link questChainFactoryAbi}__
 */
export const useWatchQuestChainFactoryEvent =
  /* #__PURE__ */ createUseWatchContractEvent({ abi: questChainFactoryAbi });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link questChainFactoryAbi}__ and `eventName` set to `"AdminReplaceProposed"`
 */
export const useWatchQuestChainFactoryAdminReplaceProposedEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: questChainFactoryAbi,
    eventName: 'AdminReplaceProposed',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link questChainFactoryAbi}__ and `eventName` set to `"AdminReplaced"`
 */
export const useWatchQuestChainFactoryAdminReplacedEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: questChainFactoryAbi,
    eventName: 'AdminReplaced',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link questChainFactoryAbi}__ and `eventName` set to `"FactorySetup"`
 */
export const useWatchQuestChainFactoryFactorySetupEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: questChainFactoryAbi,
    eventName: 'FactorySetup',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link questChainFactoryAbi}__ and `eventName` set to `"QuestChainCreated"`
 */
export const useWatchQuestChainFactoryQuestChainCreatedEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: questChainFactoryAbi,
    eventName: 'QuestChainCreated',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link questChainTokenAbi}__
 */
export const useReadQuestChainToken = /* #__PURE__ */ createUseReadContract({
  abi: questChainTokenAbi,
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link questChainTokenAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadQuestChainTokenBalanceOf =
  /* #__PURE__ */ createUseReadContract({
    abi: questChainTokenAbi,
    functionName: 'balanceOf',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link questChainTokenAbi}__ and `functionName` set to `"balanceOfBatch"`
 */
export const useReadQuestChainTokenBalanceOfBatch =
  /* #__PURE__ */ createUseReadContract({
    abi: questChainTokenAbi,
    functionName: 'balanceOfBatch',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link questChainTokenAbi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const useReadQuestChainTokenIsApprovedForAll =
  /* #__PURE__ */ createUseReadContract({
    abi: questChainTokenAbi,
    functionName: 'isApprovedForAll',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link questChainTokenAbi}__ and `functionName` set to `"questChainFactory"`
 */
export const useReadQuestChainTokenQuestChainFactory =
  /* #__PURE__ */ createUseReadContract({
    abi: questChainTokenAbi,
    functionName: 'questChainFactory',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link questChainTokenAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadQuestChainTokenSupportsInterface =
  /* #__PURE__ */ createUseReadContract({
    abi: questChainTokenAbi,
    functionName: 'supportsInterface',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link questChainTokenAbi}__ and `functionName` set to `"tokenOwner"`
 */
export const useReadQuestChainTokenTokenOwner =
  /* #__PURE__ */ createUseReadContract({
    abi: questChainTokenAbi,
    functionName: 'tokenOwner',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link questChainTokenAbi}__ and `functionName` set to `"uri"`
 */
export const useReadQuestChainTokenUri = /* #__PURE__ */ createUseReadContract({
  abi: questChainTokenAbi,
  functionName: 'uri',
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link questChainTokenAbi}__
 */
export const useWriteQuestChainToken = /* #__PURE__ */ createUseWriteContract({
  abi: questChainTokenAbi,
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link questChainTokenAbi}__ and `functionName` set to `"burn"`
 */
export const useWriteQuestChainTokenBurn =
  /* #__PURE__ */ createUseWriteContract({
    abi: questChainTokenAbi,
    functionName: 'burn',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link questChainTokenAbi}__ and `functionName` set to `"mint"`
 */
export const useWriteQuestChainTokenMint =
  /* #__PURE__ */ createUseWriteContract({
    abi: questChainTokenAbi,
    functionName: 'mint',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link questChainTokenAbi}__ and `functionName` set to `"safeBatchTransferFrom"`
 */
export const useWriteQuestChainTokenSafeBatchTransferFrom =
  /* #__PURE__ */ createUseWriteContract({
    abi: questChainTokenAbi,
    functionName: 'safeBatchTransferFrom',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link questChainTokenAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useWriteQuestChainTokenSafeTransferFrom =
  /* #__PURE__ */ createUseWriteContract({
    abi: questChainTokenAbi,
    functionName: 'safeTransferFrom',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link questChainTokenAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useWriteQuestChainTokenSetApprovalForAll =
  /* #__PURE__ */ createUseWriteContract({
    abi: questChainTokenAbi,
    functionName: 'setApprovalForAll',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link questChainTokenAbi}__ and `functionName` set to `"setTokenOwner"`
 */
export const useWriteQuestChainTokenSetTokenOwner =
  /* #__PURE__ */ createUseWriteContract({
    abi: questChainTokenAbi,
    functionName: 'setTokenOwner',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link questChainTokenAbi}__ and `functionName` set to `"setTokenURI"`
 */
export const useWriteQuestChainTokenSetTokenUri =
  /* #__PURE__ */ createUseWriteContract({
    abi: questChainTokenAbi,
    functionName: 'setTokenURI',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link questChainTokenAbi}__
 */
export const useSimulateQuestChainToken =
  /* #__PURE__ */ createUseSimulateContract({ abi: questChainTokenAbi });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link questChainTokenAbi}__ and `functionName` set to `"burn"`
 */
export const useSimulateQuestChainTokenBurn =
  /* #__PURE__ */ createUseSimulateContract({
    abi: questChainTokenAbi,
    functionName: 'burn',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link questChainTokenAbi}__ and `functionName` set to `"mint"`
 */
export const useSimulateQuestChainTokenMint =
  /* #__PURE__ */ createUseSimulateContract({
    abi: questChainTokenAbi,
    functionName: 'mint',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link questChainTokenAbi}__ and `functionName` set to `"safeBatchTransferFrom"`
 */
export const useSimulateQuestChainTokenSafeBatchTransferFrom =
  /* #__PURE__ */ createUseSimulateContract({
    abi: questChainTokenAbi,
    functionName: 'safeBatchTransferFrom',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link questChainTokenAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useSimulateQuestChainTokenSafeTransferFrom =
  /* #__PURE__ */ createUseSimulateContract({
    abi: questChainTokenAbi,
    functionName: 'safeTransferFrom',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link questChainTokenAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useSimulateQuestChainTokenSetApprovalForAll =
  /* #__PURE__ */ createUseSimulateContract({
    abi: questChainTokenAbi,
    functionName: 'setApprovalForAll',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link questChainTokenAbi}__ and `functionName` set to `"setTokenOwner"`
 */
export const useSimulateQuestChainTokenSetTokenOwner =
  /* #__PURE__ */ createUseSimulateContract({
    abi: questChainTokenAbi,
    functionName: 'setTokenOwner',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link questChainTokenAbi}__ and `functionName` set to `"setTokenURI"`
 */
export const useSimulateQuestChainTokenSetTokenUri =
  /* #__PURE__ */ createUseSimulateContract({
    abi: questChainTokenAbi,
    functionName: 'setTokenURI',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link questChainTokenAbi}__
 */
export const useWatchQuestChainTokenEvent =
  /* #__PURE__ */ createUseWatchContractEvent({ abi: questChainTokenAbi });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link questChainTokenAbi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const useWatchQuestChainTokenApprovalForAllEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: questChainTokenAbi,
    eventName: 'ApprovalForAll',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link questChainTokenAbi}__ and `eventName` set to `"TransferBatch"`
 */
export const useWatchQuestChainTokenTransferBatchEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: questChainTokenAbi,
    eventName: 'TransferBatch',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link questChainTokenAbi}__ and `eventName` set to `"TransferSingle"`
 */
export const useWatchQuestChainTokenTransferSingleEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: questChainTokenAbi,
    eventName: 'TransferSingle',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link questChainTokenAbi}__ and `eventName` set to `"URI"`
 */
export const useWatchQuestChainTokenUriEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: questChainTokenAbi,
    eventName: 'URI',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link smartInvoiceEscrowAbi}__
 */
export const useReadSmartInvoiceEscrow = /* #__PURE__ */ createUseReadContract({
  abi: smartInvoiceEscrowAbi,
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link smartInvoiceEscrowAbi}__ and `functionName` set to `"MAX_TERMINATION_TIME"`
 */
export const useReadSmartInvoiceEscrowMaxTerminationTime =
  /* #__PURE__ */ createUseReadContract({
    abi: smartInvoiceEscrowAbi,
    functionName: 'MAX_TERMINATION_TIME',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link smartInvoiceEscrowAbi}__ and `functionName` set to `"NUM_RULING_OPTIONS"`
 */
export const useReadSmartInvoiceEscrowNumRulingOptions =
  /* #__PURE__ */ createUseReadContract({
    abi: smartInvoiceEscrowAbi,
    functionName: 'NUM_RULING_OPTIONS',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link smartInvoiceEscrowAbi}__ and `functionName` set to `"RULINGS"`
 */
export const useReadSmartInvoiceEscrowRulings =
  /* #__PURE__ */ createUseReadContract({
    abi: smartInvoiceEscrowAbi,
    functionName: 'RULINGS',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link smartInvoiceEscrowAbi}__ and `functionName` set to `"amounts"`
 */
export const useReadSmartInvoiceEscrowAmounts =
  /* #__PURE__ */ createUseReadContract({
    abi: smartInvoiceEscrowAbi,
    functionName: 'amounts',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link smartInvoiceEscrowAbi}__ and `functionName` set to `"client"`
 */
export const useReadSmartInvoiceEscrowClient =
  /* #__PURE__ */ createUseReadContract({
    abi: smartInvoiceEscrowAbi,
    functionName: 'client',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link smartInvoiceEscrowAbi}__ and `functionName` set to `"details"`
 */
export const useReadSmartInvoiceEscrowDetails =
  /* #__PURE__ */ createUseReadContract({
    abi: smartInvoiceEscrowAbi,
    functionName: 'details',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link smartInvoiceEscrowAbi}__ and `functionName` set to `"disputeId"`
 */
export const useReadSmartInvoiceEscrowDisputeId =
  /* #__PURE__ */ createUseReadContract({
    abi: smartInvoiceEscrowAbi,
    functionName: 'disputeId',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link smartInvoiceEscrowAbi}__ and `functionName` set to `"getAmounts"`
 */
export const useReadSmartInvoiceEscrowGetAmounts =
  /* #__PURE__ */ createUseReadContract({
    abi: smartInvoiceEscrowAbi,
    functionName: 'getAmounts',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link smartInvoiceEscrowAbi}__ and `functionName` set to `"locked"`
 */
export const useReadSmartInvoiceEscrowLocked =
  /* #__PURE__ */ createUseReadContract({
    abi: smartInvoiceEscrowAbi,
    functionName: 'locked',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link smartInvoiceEscrowAbi}__ and `functionName` set to `"milestone"`
 */
export const useReadSmartInvoiceEscrowMilestone =
  /* #__PURE__ */ createUseReadContract({
    abi: smartInvoiceEscrowAbi,
    functionName: 'milestone',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link smartInvoiceEscrowAbi}__ and `functionName` set to `"provider"`
 */
export const useReadSmartInvoiceEscrowProvider =
  /* #__PURE__ */ createUseReadContract({
    abi: smartInvoiceEscrowAbi,
    functionName: 'provider',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link smartInvoiceEscrowAbi}__ and `functionName` set to `"released"`
 */
export const useReadSmartInvoiceEscrowReleased =
  /* #__PURE__ */ createUseReadContract({
    abi: smartInvoiceEscrowAbi,
    functionName: 'released',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link smartInvoiceEscrowAbi}__ and `functionName` set to `"resolutionRate"`
 */
export const useReadSmartInvoiceEscrowResolutionRate =
  /* #__PURE__ */ createUseReadContract({
    abi: smartInvoiceEscrowAbi,
    functionName: 'resolutionRate',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link smartInvoiceEscrowAbi}__ and `functionName` set to `"resolver"`
 */
export const useReadSmartInvoiceEscrowResolver =
  /* #__PURE__ */ createUseReadContract({
    abi: smartInvoiceEscrowAbi,
    functionName: 'resolver',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link smartInvoiceEscrowAbi}__ and `functionName` set to `"resolverType"`
 */
export const useReadSmartInvoiceEscrowResolverType =
  /* #__PURE__ */ createUseReadContract({
    abi: smartInvoiceEscrowAbi,
    functionName: 'resolverType',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link smartInvoiceEscrowAbi}__ and `functionName` set to `"terminationTime"`
 */
export const useReadSmartInvoiceEscrowTerminationTime =
  /* #__PURE__ */ createUseReadContract({
    abi: smartInvoiceEscrowAbi,
    functionName: 'terminationTime',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link smartInvoiceEscrowAbi}__ and `functionName` set to `"token"`
 */
export const useReadSmartInvoiceEscrowToken =
  /* #__PURE__ */ createUseReadContract({
    abi: smartInvoiceEscrowAbi,
    functionName: 'token',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link smartInvoiceEscrowAbi}__ and `functionName` set to `"total"`
 */
export const useReadSmartInvoiceEscrowTotal =
  /* #__PURE__ */ createUseReadContract({
    abi: smartInvoiceEscrowAbi,
    functionName: 'total',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link smartInvoiceEscrowAbi}__ and `functionName` set to `"wrappedNativeToken"`
 */
export const useReadSmartInvoiceEscrowWrappedNativeToken =
  /* #__PURE__ */ createUseReadContract({
    abi: smartInvoiceEscrowAbi,
    functionName: 'wrappedNativeToken',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link smartInvoiceEscrowAbi}__
 */
export const useWriteSmartInvoiceEscrow =
  /* #__PURE__ */ createUseWriteContract({
    abi: smartInvoiceEscrowAbi,
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link smartInvoiceEscrowAbi}__ and `functionName` set to `"addMilestones"`
 */
export const useWriteSmartInvoiceEscrowAddMilestones =
  /* #__PURE__ */ createUseWriteContract({
    abi: smartInvoiceEscrowAbi,
    functionName: 'addMilestones',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link smartInvoiceEscrowAbi}__ and `functionName` set to `"init"`
 */
export const useWriteSmartInvoiceEscrowInit =
  /* #__PURE__ */ createUseWriteContract({
    abi: smartInvoiceEscrowAbi,
    functionName: 'init',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link smartInvoiceEscrowAbi}__ and `functionName` set to `"lock"`
 */
export const useWriteSmartInvoiceEscrowLock =
  /* #__PURE__ */ createUseWriteContract({
    abi: smartInvoiceEscrowAbi,
    functionName: 'lock',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link smartInvoiceEscrowAbi}__ and `functionName` set to `"release"`
 */
export const useWriteSmartInvoiceEscrowRelease =
  /* #__PURE__ */ createUseWriteContract({
    abi: smartInvoiceEscrowAbi,
    functionName: 'release',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link smartInvoiceEscrowAbi}__ and `functionName` set to `"releaseTokens"`
 */
export const useWriteSmartInvoiceEscrowReleaseTokens =
  /* #__PURE__ */ createUseWriteContract({
    abi: smartInvoiceEscrowAbi,
    functionName: 'releaseTokens',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link smartInvoiceEscrowAbi}__ and `functionName` set to `"resolve"`
 */
export const useWriteSmartInvoiceEscrowResolve =
  /* #__PURE__ */ createUseWriteContract({
    abi: smartInvoiceEscrowAbi,
    functionName: 'resolve',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link smartInvoiceEscrowAbi}__ and `functionName` set to `"rule"`
 */
export const useWriteSmartInvoiceEscrowRule =
  /* #__PURE__ */ createUseWriteContract({
    abi: smartInvoiceEscrowAbi,
    functionName: 'rule',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link smartInvoiceEscrowAbi}__ and `functionName` set to `"verify"`
 */
export const useWriteSmartInvoiceEscrowVerify =
  /* #__PURE__ */ createUseWriteContract({
    abi: smartInvoiceEscrowAbi,
    functionName: 'verify',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link smartInvoiceEscrowAbi}__ and `functionName` set to `"withdraw"`
 */
export const useWriteSmartInvoiceEscrowWithdraw =
  /* #__PURE__ */ createUseWriteContract({
    abi: smartInvoiceEscrowAbi,
    functionName: 'withdraw',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link smartInvoiceEscrowAbi}__ and `functionName` set to `"withdrawTokens"`
 */
export const useWriteSmartInvoiceEscrowWithdrawTokens =
  /* #__PURE__ */ createUseWriteContract({
    abi: smartInvoiceEscrowAbi,
    functionName: 'withdrawTokens',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link smartInvoiceEscrowAbi}__
 */
export const useSimulateSmartInvoiceEscrow =
  /* #__PURE__ */ createUseSimulateContract({ abi: smartInvoiceEscrowAbi });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link smartInvoiceEscrowAbi}__ and `functionName` set to `"addMilestones"`
 */
export const useSimulateSmartInvoiceEscrowAddMilestones =
  /* #__PURE__ */ createUseSimulateContract({
    abi: smartInvoiceEscrowAbi,
    functionName: 'addMilestones',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link smartInvoiceEscrowAbi}__ and `functionName` set to `"init"`
 */
export const useSimulateSmartInvoiceEscrowInit =
  /* #__PURE__ */ createUseSimulateContract({
    abi: smartInvoiceEscrowAbi,
    functionName: 'init',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link smartInvoiceEscrowAbi}__ and `functionName` set to `"lock"`
 */
export const useSimulateSmartInvoiceEscrowLock =
  /* #__PURE__ */ createUseSimulateContract({
    abi: smartInvoiceEscrowAbi,
    functionName: 'lock',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link smartInvoiceEscrowAbi}__ and `functionName` set to `"release"`
 */
export const useSimulateSmartInvoiceEscrowRelease =
  /* #__PURE__ */ createUseSimulateContract({
    abi: smartInvoiceEscrowAbi,
    functionName: 'release',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link smartInvoiceEscrowAbi}__ and `functionName` set to `"releaseTokens"`
 */
export const useSimulateSmartInvoiceEscrowReleaseTokens =
  /* #__PURE__ */ createUseSimulateContract({
    abi: smartInvoiceEscrowAbi,
    functionName: 'releaseTokens',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link smartInvoiceEscrowAbi}__ and `functionName` set to `"resolve"`
 */
export const useSimulateSmartInvoiceEscrowResolve =
  /* #__PURE__ */ createUseSimulateContract({
    abi: smartInvoiceEscrowAbi,
    functionName: 'resolve',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link smartInvoiceEscrowAbi}__ and `functionName` set to `"rule"`
 */
export const useSimulateSmartInvoiceEscrowRule =
  /* #__PURE__ */ createUseSimulateContract({
    abi: smartInvoiceEscrowAbi,
    functionName: 'rule',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link smartInvoiceEscrowAbi}__ and `functionName` set to `"verify"`
 */
export const useSimulateSmartInvoiceEscrowVerify =
  /* #__PURE__ */ createUseSimulateContract({
    abi: smartInvoiceEscrowAbi,
    functionName: 'verify',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link smartInvoiceEscrowAbi}__ and `functionName` set to `"withdraw"`
 */
export const useSimulateSmartInvoiceEscrowWithdraw =
  /* #__PURE__ */ createUseSimulateContract({
    abi: smartInvoiceEscrowAbi,
    functionName: 'withdraw',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link smartInvoiceEscrowAbi}__ and `functionName` set to `"withdrawTokens"`
 */
export const useSimulateSmartInvoiceEscrowWithdrawTokens =
  /* #__PURE__ */ createUseSimulateContract({
    abi: smartInvoiceEscrowAbi,
    functionName: 'withdrawTokens',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link smartInvoiceEscrowAbi}__
 */
export const useWatchSmartInvoiceEscrowEvent =
  /* #__PURE__ */ createUseWatchContractEvent({ abi: smartInvoiceEscrowAbi });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link smartInvoiceEscrowAbi}__ and `eventName` set to `"Deposit"`
 */
export const useWatchSmartInvoiceEscrowDepositEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: smartInvoiceEscrowAbi,
    eventName: 'Deposit',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link smartInvoiceEscrowAbi}__ and `eventName` set to `"DetailsUpdated"`
 */
export const useWatchSmartInvoiceEscrowDetailsUpdatedEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: smartInvoiceEscrowAbi,
    eventName: 'DetailsUpdated',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link smartInvoiceEscrowAbi}__ and `eventName` set to `"Initialized"`
 */
export const useWatchSmartInvoiceEscrowInitializedEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: smartInvoiceEscrowAbi,
    eventName: 'Initialized',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link smartInvoiceEscrowAbi}__ and `eventName` set to `"Lock"`
 */
export const useWatchSmartInvoiceEscrowLockEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: smartInvoiceEscrowAbi,
    eventName: 'Lock',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link smartInvoiceEscrowAbi}__ and `eventName` set to `"MilestonesAdded"`
 */
export const useWatchSmartInvoiceEscrowMilestonesAddedEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: smartInvoiceEscrowAbi,
    eventName: 'MilestonesAdded',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link smartInvoiceEscrowAbi}__ and `eventName` set to `"Release"`
 */
export const useWatchSmartInvoiceEscrowReleaseEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: smartInvoiceEscrowAbi,
    eventName: 'Release',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link smartInvoiceEscrowAbi}__ and `eventName` set to `"Resolve"`
 */
export const useWatchSmartInvoiceEscrowResolveEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: smartInvoiceEscrowAbi,
    eventName: 'Resolve',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link smartInvoiceEscrowAbi}__ and `eventName` set to `"Rule"`
 */
export const useWatchSmartInvoiceEscrowRuleEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: smartInvoiceEscrowAbi,
    eventName: 'Rule',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link smartInvoiceEscrowAbi}__ and `eventName` set to `"Ruling"`
 */
export const useWatchSmartInvoiceEscrowRulingEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: smartInvoiceEscrowAbi,
    eventName: 'Ruling',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link smartInvoiceEscrowAbi}__ and `eventName` set to `"Verified"`
 */
export const useWatchSmartInvoiceEscrowVerifiedEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: smartInvoiceEscrowAbi,
    eventName: 'Verified',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link smartInvoiceEscrowAbi}__ and `eventName` set to `"Withdraw"`
 */
export const useWatchSmartInvoiceEscrowWithdrawEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: smartInvoiceEscrowAbi,
    eventName: 'Withdraw',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link smartInvoiceFactoryAbi}__
 */
export const useReadSmartInvoiceFactory = /* #__PURE__ */ createUseReadContract(
  {
    abi: smartInvoiceFactoryAbi,
  },
);

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link smartInvoiceFactoryAbi}__ and `functionName` set to `"ADMIN"`
 */
export const useReadSmartInvoiceFactoryAdmin =
  /* #__PURE__ */ createUseReadContract({
    abi: smartInvoiceFactoryAbi,
    functionName: 'ADMIN',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link smartInvoiceFactoryAbi}__ and `functionName` set to `"DEFAULT_ADMIN_ROLE"`
 */
export const useReadSmartInvoiceFactoryDefaultAdminRole =
  /* #__PURE__ */ createUseReadContract({
    abi: smartInvoiceFactoryAbi,
    functionName: 'DEFAULT_ADMIN_ROLE',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link smartInvoiceFactoryAbi}__ and `functionName` set to `"currentVersions"`
 */
export const useReadSmartInvoiceFactoryCurrentVersions =
  /* #__PURE__ */ createUseReadContract({
    abi: smartInvoiceFactoryAbi,
    functionName: 'currentVersions',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link smartInvoiceFactoryAbi}__ and `functionName` set to `"getImplementation"`
 */
export const useReadSmartInvoiceFactoryGetImplementation =
  /* #__PURE__ */ createUseReadContract({
    abi: smartInvoiceFactoryAbi,
    functionName: 'getImplementation',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link smartInvoiceFactoryAbi}__ and `functionName` set to `"getInvoiceAddress"`
 */
export const useReadSmartInvoiceFactoryGetInvoiceAddress =
  /* #__PURE__ */ createUseReadContract({
    abi: smartInvoiceFactoryAbi,
    functionName: 'getInvoiceAddress',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link smartInvoiceFactoryAbi}__ and `functionName` set to `"getRoleAdmin"`
 */
export const useReadSmartInvoiceFactoryGetRoleAdmin =
  /* #__PURE__ */ createUseReadContract({
    abi: smartInvoiceFactoryAbi,
    functionName: 'getRoleAdmin',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link smartInvoiceFactoryAbi}__ and `functionName` set to `"hasRole"`
 */
export const useReadSmartInvoiceFactoryHasRole =
  /* #__PURE__ */ createUseReadContract({
    abi: smartInvoiceFactoryAbi,
    functionName: 'hasRole',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link smartInvoiceFactoryAbi}__ and `functionName` set to `"implementations"`
 */
export const useReadSmartInvoiceFactoryImplementations =
  /* #__PURE__ */ createUseReadContract({
    abi: smartInvoiceFactoryAbi,
    functionName: 'implementations',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link smartInvoiceFactoryAbi}__ and `functionName` set to `"invoiceCount"`
 */
export const useReadSmartInvoiceFactoryInvoiceCount =
  /* #__PURE__ */ createUseReadContract({
    abi: smartInvoiceFactoryAbi,
    functionName: 'invoiceCount',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link smartInvoiceFactoryAbi}__ and `functionName` set to `"predictDeterministicAddress"`
 */
export const useReadSmartInvoiceFactoryPredictDeterministicAddress =
  /* #__PURE__ */ createUseReadContract({
    abi: smartInvoiceFactoryAbi,
    functionName: 'predictDeterministicAddress',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link smartInvoiceFactoryAbi}__ and `functionName` set to `"resolutionRateOf"`
 */
export const useReadSmartInvoiceFactoryResolutionRateOf =
  /* #__PURE__ */ createUseReadContract({
    abi: smartInvoiceFactoryAbi,
    functionName: 'resolutionRateOf',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link smartInvoiceFactoryAbi}__ and `functionName` set to `"resolutionRates"`
 */
export const useReadSmartInvoiceFactoryResolutionRates =
  /* #__PURE__ */ createUseReadContract({
    abi: smartInvoiceFactoryAbi,
    functionName: 'resolutionRates',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link smartInvoiceFactoryAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadSmartInvoiceFactorySupportsInterface =
  /* #__PURE__ */ createUseReadContract({
    abi: smartInvoiceFactoryAbi,
    functionName: 'supportsInterface',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link smartInvoiceFactoryAbi}__ and `functionName` set to `"wrappedNativeToken"`
 */
export const useReadSmartInvoiceFactoryWrappedNativeToken =
  /* #__PURE__ */ createUseReadContract({
    abi: smartInvoiceFactoryAbi,
    functionName: 'wrappedNativeToken',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link smartInvoiceFactoryAbi}__
 */
export const useWriteSmartInvoiceFactory =
  /* #__PURE__ */ createUseWriteContract({ abi: smartInvoiceFactoryAbi });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link smartInvoiceFactoryAbi}__ and `functionName` set to `"addImplementation"`
 */
export const useWriteSmartInvoiceFactoryAddImplementation =
  /* #__PURE__ */ createUseWriteContract({
    abi: smartInvoiceFactoryAbi,
    functionName: 'addImplementation',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link smartInvoiceFactoryAbi}__ and `functionName` set to `"create"`
 */
export const useWriteSmartInvoiceFactoryCreate =
  /* #__PURE__ */ createUseWriteContract({
    abi: smartInvoiceFactoryAbi,
    functionName: 'create',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link smartInvoiceFactoryAbi}__ and `functionName` set to `"createDeterministic"`
 */
export const useWriteSmartInvoiceFactoryCreateDeterministic =
  /* #__PURE__ */ createUseWriteContract({
    abi: smartInvoiceFactoryAbi,
    functionName: 'createDeterministic',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link smartInvoiceFactoryAbi}__ and `functionName` set to `"grantRole"`
 */
export const useWriteSmartInvoiceFactoryGrantRole =
  /* #__PURE__ */ createUseWriteContract({
    abi: smartInvoiceFactoryAbi,
    functionName: 'grantRole',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link smartInvoiceFactoryAbi}__ and `functionName` set to `"renounceRole"`
 */
export const useWriteSmartInvoiceFactoryRenounceRole =
  /* #__PURE__ */ createUseWriteContract({
    abi: smartInvoiceFactoryAbi,
    functionName: 'renounceRole',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link smartInvoiceFactoryAbi}__ and `functionName` set to `"revokeRole"`
 */
export const useWriteSmartInvoiceFactoryRevokeRole =
  /* #__PURE__ */ createUseWriteContract({
    abi: smartInvoiceFactoryAbi,
    functionName: 'revokeRole',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link smartInvoiceFactoryAbi}__ and `functionName` set to `"updateResolutionRate"`
 */
export const useWriteSmartInvoiceFactoryUpdateResolutionRate =
  /* #__PURE__ */ createUseWriteContract({
    abi: smartInvoiceFactoryAbi,
    functionName: 'updateResolutionRate',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link smartInvoiceFactoryAbi}__
 */
export const useSimulateSmartInvoiceFactory =
  /* #__PURE__ */ createUseSimulateContract({ abi: smartInvoiceFactoryAbi });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link smartInvoiceFactoryAbi}__ and `functionName` set to `"addImplementation"`
 */
export const useSimulateSmartInvoiceFactoryAddImplementation =
  /* #__PURE__ */ createUseSimulateContract({
    abi: smartInvoiceFactoryAbi,
    functionName: 'addImplementation',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link smartInvoiceFactoryAbi}__ and `functionName` set to `"create"`
 */
export const useSimulateSmartInvoiceFactoryCreate =
  /* #__PURE__ */ createUseSimulateContract({
    abi: smartInvoiceFactoryAbi,
    functionName: 'create',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link smartInvoiceFactoryAbi}__ and `functionName` set to `"createDeterministic"`
 */
export const useSimulateSmartInvoiceFactoryCreateDeterministic =
  /* #__PURE__ */ createUseSimulateContract({
    abi: smartInvoiceFactoryAbi,
    functionName: 'createDeterministic',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link smartInvoiceFactoryAbi}__ and `functionName` set to `"grantRole"`
 */
export const useSimulateSmartInvoiceFactoryGrantRole =
  /* #__PURE__ */ createUseSimulateContract({
    abi: smartInvoiceFactoryAbi,
    functionName: 'grantRole',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link smartInvoiceFactoryAbi}__ and `functionName` set to `"renounceRole"`
 */
export const useSimulateSmartInvoiceFactoryRenounceRole =
  /* #__PURE__ */ createUseSimulateContract({
    abi: smartInvoiceFactoryAbi,
    functionName: 'renounceRole',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link smartInvoiceFactoryAbi}__ and `functionName` set to `"revokeRole"`
 */
export const useSimulateSmartInvoiceFactoryRevokeRole =
  /* #__PURE__ */ createUseSimulateContract({
    abi: smartInvoiceFactoryAbi,
    functionName: 'revokeRole',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link smartInvoiceFactoryAbi}__ and `functionName` set to `"updateResolutionRate"`
 */
export const useSimulateSmartInvoiceFactoryUpdateResolutionRate =
  /* #__PURE__ */ createUseSimulateContract({
    abi: smartInvoiceFactoryAbi,
    functionName: 'updateResolutionRate',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link smartInvoiceFactoryAbi}__
 */
export const useWatchSmartInvoiceFactoryEvent =
  /* #__PURE__ */ createUseWatchContractEvent({ abi: smartInvoiceFactoryAbi });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link smartInvoiceFactoryAbi}__ and `eventName` set to `"AddImplementation"`
 */
export const useWatchSmartInvoiceFactoryAddImplementationEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: smartInvoiceFactoryAbi,
    eventName: 'AddImplementation',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link smartInvoiceFactoryAbi}__ and `eventName` set to `"LogNewInvoice"`
 */
export const useWatchSmartInvoiceFactoryLogNewInvoiceEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: smartInvoiceFactoryAbi,
    eventName: 'LogNewInvoice',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link smartInvoiceFactoryAbi}__ and `eventName` set to `"RoleAdminChanged"`
 */
export const useWatchSmartInvoiceFactoryRoleAdminChangedEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: smartInvoiceFactoryAbi,
    eventName: 'RoleAdminChanged',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link smartInvoiceFactoryAbi}__ and `eventName` set to `"RoleGranted"`
 */
export const useWatchSmartInvoiceFactoryRoleGrantedEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: smartInvoiceFactoryAbi,
    eventName: 'RoleGranted',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link smartInvoiceFactoryAbi}__ and `eventName` set to `"RoleRevoked"`
 */
export const useWatchSmartInvoiceFactoryRoleRevokedEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: smartInvoiceFactoryAbi,
    eventName: 'RoleRevoked',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link smartInvoiceFactoryAbi}__ and `eventName` set to `"SmartInvoiceFactoryInit"`
 */
export const useWatchSmartInvoiceFactorySmartInvoiceFactoryInitEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: smartInvoiceFactoryAbi,
    eventName: 'SmartInvoiceFactoryInit',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link smartInvoiceFactoryAbi}__ and `eventName` set to `"UpdateResolutionRate"`
 */
export const useWatchSmartInvoiceFactoryUpdateResolutionRateEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: smartInvoiceFactoryAbi,
    eventName: 'UpdateResolutionRate',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link smartInvoiceUpdatableAbi}__
 */
export const useReadSmartInvoiceUpdatable =
  /* #__PURE__ */ createUseReadContract({ abi: smartInvoiceUpdatableAbi });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link smartInvoiceUpdatableAbi}__ and `functionName` set to `"MAX_TERMINATION_TIME"`
 */
export const useReadSmartInvoiceUpdatableMaxTerminationTime =
  /* #__PURE__ */ createUseReadContract({
    abi: smartInvoiceUpdatableAbi,
    functionName: 'MAX_TERMINATION_TIME',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link smartInvoiceUpdatableAbi}__ and `functionName` set to `"NUM_RULING_OPTIONS"`
 */
export const useReadSmartInvoiceUpdatableNumRulingOptions =
  /* #__PURE__ */ createUseReadContract({
    abi: smartInvoiceUpdatableAbi,
    functionName: 'NUM_RULING_OPTIONS',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link smartInvoiceUpdatableAbi}__ and `functionName` set to `"RULINGS"`
 */
export const useReadSmartInvoiceUpdatableRulings =
  /* #__PURE__ */ createUseReadContract({
    abi: smartInvoiceUpdatableAbi,
    functionName: 'RULINGS',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link smartInvoiceUpdatableAbi}__ and `functionName` set to `"amounts"`
 */
export const useReadSmartInvoiceUpdatableAmounts =
  /* #__PURE__ */ createUseReadContract({
    abi: smartInvoiceUpdatableAbi,
    functionName: 'amounts',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link smartInvoiceUpdatableAbi}__ and `functionName` set to `"client"`
 */
export const useReadSmartInvoiceUpdatableClient =
  /* #__PURE__ */ createUseReadContract({
    abi: smartInvoiceUpdatableAbi,
    functionName: 'client',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link smartInvoiceUpdatableAbi}__ and `functionName` set to `"details"`
 */
export const useReadSmartInvoiceUpdatableDetails =
  /* #__PURE__ */ createUseReadContract({
    abi: smartInvoiceUpdatableAbi,
    functionName: 'details',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link smartInvoiceUpdatableAbi}__ and `functionName` set to `"disputeId"`
 */
export const useReadSmartInvoiceUpdatableDisputeId =
  /* #__PURE__ */ createUseReadContract({
    abi: smartInvoiceUpdatableAbi,
    functionName: 'disputeId',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link smartInvoiceUpdatableAbi}__ and `functionName` set to `"getAmounts"`
 */
export const useReadSmartInvoiceUpdatableGetAmounts =
  /* #__PURE__ */ createUseReadContract({
    abi: smartInvoiceUpdatableAbi,
    functionName: 'getAmounts',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link smartInvoiceUpdatableAbi}__ and `functionName` set to `"locked"`
 */
export const useReadSmartInvoiceUpdatableLocked =
  /* #__PURE__ */ createUseReadContract({
    abi: smartInvoiceUpdatableAbi,
    functionName: 'locked',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link smartInvoiceUpdatableAbi}__ and `functionName` set to `"milestone"`
 */
export const useReadSmartInvoiceUpdatableMilestone =
  /* #__PURE__ */ createUseReadContract({
    abi: smartInvoiceUpdatableAbi,
    functionName: 'milestone',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link smartInvoiceUpdatableAbi}__ and `functionName` set to `"provider"`
 */
export const useReadSmartInvoiceUpdatableProvider =
  /* #__PURE__ */ createUseReadContract({
    abi: smartInvoiceUpdatableAbi,
    functionName: 'provider',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link smartInvoiceUpdatableAbi}__ and `functionName` set to `"providerReceiver"`
 */
export const useReadSmartInvoiceUpdatableProviderReceiver =
  /* #__PURE__ */ createUseReadContract({
    abi: smartInvoiceUpdatableAbi,
    functionName: 'providerReceiver',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link smartInvoiceUpdatableAbi}__ and `functionName` set to `"released"`
 */
export const useReadSmartInvoiceUpdatableReleased =
  /* #__PURE__ */ createUseReadContract({
    abi: smartInvoiceUpdatableAbi,
    functionName: 'released',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link smartInvoiceUpdatableAbi}__ and `functionName` set to `"resolutionRate"`
 */
export const useReadSmartInvoiceUpdatableResolutionRate =
  /* #__PURE__ */ createUseReadContract({
    abi: smartInvoiceUpdatableAbi,
    functionName: 'resolutionRate',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link smartInvoiceUpdatableAbi}__ and `functionName` set to `"resolver"`
 */
export const useReadSmartInvoiceUpdatableResolver =
  /* #__PURE__ */ createUseReadContract({
    abi: smartInvoiceUpdatableAbi,
    functionName: 'resolver',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link smartInvoiceUpdatableAbi}__ and `functionName` set to `"resolverType"`
 */
export const useReadSmartInvoiceUpdatableResolverType =
  /* #__PURE__ */ createUseReadContract({
    abi: smartInvoiceUpdatableAbi,
    functionName: 'resolverType',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link smartInvoiceUpdatableAbi}__ and `functionName` set to `"terminationTime"`
 */
export const useReadSmartInvoiceUpdatableTerminationTime =
  /* #__PURE__ */ createUseReadContract({
    abi: smartInvoiceUpdatableAbi,
    functionName: 'terminationTime',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link smartInvoiceUpdatableAbi}__ and `functionName` set to `"token"`
 */
export const useReadSmartInvoiceUpdatableToken =
  /* #__PURE__ */ createUseReadContract({
    abi: smartInvoiceUpdatableAbi,
    functionName: 'token',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link smartInvoiceUpdatableAbi}__ and `functionName` set to `"total"`
 */
export const useReadSmartInvoiceUpdatableTotal =
  /* #__PURE__ */ createUseReadContract({
    abi: smartInvoiceUpdatableAbi,
    functionName: 'total',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link smartInvoiceUpdatableAbi}__ and `functionName` set to `"wrappedNativeToken"`
 */
export const useReadSmartInvoiceUpdatableWrappedNativeToken =
  /* #__PURE__ */ createUseReadContract({
    abi: smartInvoiceUpdatableAbi,
    functionName: 'wrappedNativeToken',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link smartInvoiceUpdatableAbi}__
 */
export const useWriteSmartInvoiceUpdatable =
  /* #__PURE__ */ createUseWriteContract({ abi: smartInvoiceUpdatableAbi });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link smartInvoiceUpdatableAbi}__ and `functionName` set to `"addMilestones"`
 */
export const useWriteSmartInvoiceUpdatableAddMilestones =
  /* #__PURE__ */ createUseWriteContract({
    abi: smartInvoiceUpdatableAbi,
    functionName: 'addMilestones',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link smartInvoiceUpdatableAbi}__ and `functionName` set to `"init"`
 */
export const useWriteSmartInvoiceUpdatableInit =
  /* #__PURE__ */ createUseWriteContract({
    abi: smartInvoiceUpdatableAbi,
    functionName: 'init',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link smartInvoiceUpdatableAbi}__ and `functionName` set to `"lock"`
 */
export const useWriteSmartInvoiceUpdatableLock =
  /* #__PURE__ */ createUseWriteContract({
    abi: smartInvoiceUpdatableAbi,
    functionName: 'lock',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link smartInvoiceUpdatableAbi}__ and `functionName` set to `"release"`
 */
export const useWriteSmartInvoiceUpdatableRelease =
  /* #__PURE__ */ createUseWriteContract({
    abi: smartInvoiceUpdatableAbi,
    functionName: 'release',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link smartInvoiceUpdatableAbi}__ and `functionName` set to `"releaseTokens"`
 */
export const useWriteSmartInvoiceUpdatableReleaseTokens =
  /* #__PURE__ */ createUseWriteContract({
    abi: smartInvoiceUpdatableAbi,
    functionName: 'releaseTokens',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link smartInvoiceUpdatableAbi}__ and `functionName` set to `"resolve"`
 */
export const useWriteSmartInvoiceUpdatableResolve =
  /* #__PURE__ */ createUseWriteContract({
    abi: smartInvoiceUpdatableAbi,
    functionName: 'resolve',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link smartInvoiceUpdatableAbi}__ and `functionName` set to `"rule"`
 */
export const useWriteSmartInvoiceUpdatableRule =
  /* #__PURE__ */ createUseWriteContract({
    abi: smartInvoiceUpdatableAbi,
    functionName: 'rule',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link smartInvoiceUpdatableAbi}__ and `functionName` set to `"updateClient"`
 */
export const useWriteSmartInvoiceUpdatableUpdateClient =
  /* #__PURE__ */ createUseWriteContract({
    abi: smartInvoiceUpdatableAbi,
    functionName: 'updateClient',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link smartInvoiceUpdatableAbi}__ and `functionName` set to `"updateProvider"`
 */
export const useWriteSmartInvoiceUpdatableUpdateProvider =
  /* #__PURE__ */ createUseWriteContract({
    abi: smartInvoiceUpdatableAbi,
    functionName: 'updateProvider',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link smartInvoiceUpdatableAbi}__ and `functionName` set to `"updateProviderReceiver"`
 */
export const useWriteSmartInvoiceUpdatableUpdateProviderReceiver =
  /* #__PURE__ */ createUseWriteContract({
    abi: smartInvoiceUpdatableAbi,
    functionName: 'updateProviderReceiver',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link smartInvoiceUpdatableAbi}__ and `functionName` set to `"verify"`
 */
export const useWriteSmartInvoiceUpdatableVerify =
  /* #__PURE__ */ createUseWriteContract({
    abi: smartInvoiceUpdatableAbi,
    functionName: 'verify',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link smartInvoiceUpdatableAbi}__ and `functionName` set to `"withdraw"`
 */
export const useWriteSmartInvoiceUpdatableWithdraw =
  /* #__PURE__ */ createUseWriteContract({
    abi: smartInvoiceUpdatableAbi,
    functionName: 'withdraw',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link smartInvoiceUpdatableAbi}__ and `functionName` set to `"withdrawTokens"`
 */
export const useWriteSmartInvoiceUpdatableWithdrawTokens =
  /* #__PURE__ */ createUseWriteContract({
    abi: smartInvoiceUpdatableAbi,
    functionName: 'withdrawTokens',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link smartInvoiceUpdatableAbi}__
 */
export const useSimulateSmartInvoiceUpdatable =
  /* #__PURE__ */ createUseSimulateContract({ abi: smartInvoiceUpdatableAbi });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link smartInvoiceUpdatableAbi}__ and `functionName` set to `"addMilestones"`
 */
export const useSimulateSmartInvoiceUpdatableAddMilestones =
  /* #__PURE__ */ createUseSimulateContract({
    abi: smartInvoiceUpdatableAbi,
    functionName: 'addMilestones',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link smartInvoiceUpdatableAbi}__ and `functionName` set to `"init"`
 */
export const useSimulateSmartInvoiceUpdatableInit =
  /* #__PURE__ */ createUseSimulateContract({
    abi: smartInvoiceUpdatableAbi,
    functionName: 'init',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link smartInvoiceUpdatableAbi}__ and `functionName` set to `"lock"`
 */
export const useSimulateSmartInvoiceUpdatableLock =
  /* #__PURE__ */ createUseSimulateContract({
    abi: smartInvoiceUpdatableAbi,
    functionName: 'lock',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link smartInvoiceUpdatableAbi}__ and `functionName` set to `"release"`
 */
export const useSimulateSmartInvoiceUpdatableRelease =
  /* #__PURE__ */ createUseSimulateContract({
    abi: smartInvoiceUpdatableAbi,
    functionName: 'release',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link smartInvoiceUpdatableAbi}__ and `functionName` set to `"releaseTokens"`
 */
export const useSimulateSmartInvoiceUpdatableReleaseTokens =
  /* #__PURE__ */ createUseSimulateContract({
    abi: smartInvoiceUpdatableAbi,
    functionName: 'releaseTokens',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link smartInvoiceUpdatableAbi}__ and `functionName` set to `"resolve"`
 */
export const useSimulateSmartInvoiceUpdatableResolve =
  /* #__PURE__ */ createUseSimulateContract({
    abi: smartInvoiceUpdatableAbi,
    functionName: 'resolve',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link smartInvoiceUpdatableAbi}__ and `functionName` set to `"rule"`
 */
export const useSimulateSmartInvoiceUpdatableRule =
  /* #__PURE__ */ createUseSimulateContract({
    abi: smartInvoiceUpdatableAbi,
    functionName: 'rule',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link smartInvoiceUpdatableAbi}__ and `functionName` set to `"updateClient"`
 */
export const useSimulateSmartInvoiceUpdatableUpdateClient =
  /* #__PURE__ */ createUseSimulateContract({
    abi: smartInvoiceUpdatableAbi,
    functionName: 'updateClient',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link smartInvoiceUpdatableAbi}__ and `functionName` set to `"updateProvider"`
 */
export const useSimulateSmartInvoiceUpdatableUpdateProvider =
  /* #__PURE__ */ createUseSimulateContract({
    abi: smartInvoiceUpdatableAbi,
    functionName: 'updateProvider',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link smartInvoiceUpdatableAbi}__ and `functionName` set to `"updateProviderReceiver"`
 */
export const useSimulateSmartInvoiceUpdatableUpdateProviderReceiver =
  /* #__PURE__ */ createUseSimulateContract({
    abi: smartInvoiceUpdatableAbi,
    functionName: 'updateProviderReceiver',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link smartInvoiceUpdatableAbi}__ and `functionName` set to `"verify"`
 */
export const useSimulateSmartInvoiceUpdatableVerify =
  /* #__PURE__ */ createUseSimulateContract({
    abi: smartInvoiceUpdatableAbi,
    functionName: 'verify',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link smartInvoiceUpdatableAbi}__ and `functionName` set to `"withdraw"`
 */
export const useSimulateSmartInvoiceUpdatableWithdraw =
  /* #__PURE__ */ createUseSimulateContract({
    abi: smartInvoiceUpdatableAbi,
    functionName: 'withdraw',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link smartInvoiceUpdatableAbi}__ and `functionName` set to `"withdrawTokens"`
 */
export const useSimulateSmartInvoiceUpdatableWithdrawTokens =
  /* #__PURE__ */ createUseSimulateContract({
    abi: smartInvoiceUpdatableAbi,
    functionName: 'withdrawTokens',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link smartInvoiceUpdatableAbi}__
 */
export const useWatchSmartInvoiceUpdatableEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: smartInvoiceUpdatableAbi,
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link smartInvoiceUpdatableAbi}__ and `eventName` set to `"Deposit"`
 */
export const useWatchSmartInvoiceUpdatableDepositEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: smartInvoiceUpdatableAbi,
    eventName: 'Deposit',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link smartInvoiceUpdatableAbi}__ and `eventName` set to `"DetailsUpdated"`
 */
export const useWatchSmartInvoiceUpdatableDetailsUpdatedEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: smartInvoiceUpdatableAbi,
    eventName: 'DetailsUpdated',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link smartInvoiceUpdatableAbi}__ and `eventName` set to `"Initialized"`
 */
export const useWatchSmartInvoiceUpdatableInitializedEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: smartInvoiceUpdatableAbi,
    eventName: 'Initialized',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link smartInvoiceUpdatableAbi}__ and `eventName` set to `"Lock"`
 */
export const useWatchSmartInvoiceUpdatableLockEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: smartInvoiceUpdatableAbi,
    eventName: 'Lock',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link smartInvoiceUpdatableAbi}__ and `eventName` set to `"MilestonesAdded"`
 */
export const useWatchSmartInvoiceUpdatableMilestonesAddedEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: smartInvoiceUpdatableAbi,
    eventName: 'MilestonesAdded',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link smartInvoiceUpdatableAbi}__ and `eventName` set to `"Release"`
 */
export const useWatchSmartInvoiceUpdatableReleaseEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: smartInvoiceUpdatableAbi,
    eventName: 'Release',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link smartInvoiceUpdatableAbi}__ and `eventName` set to `"Resolve"`
 */
export const useWatchSmartInvoiceUpdatableResolveEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: smartInvoiceUpdatableAbi,
    eventName: 'Resolve',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link smartInvoiceUpdatableAbi}__ and `eventName` set to `"Rule"`
 */
export const useWatchSmartInvoiceUpdatableRuleEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: smartInvoiceUpdatableAbi,
    eventName: 'Rule',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link smartInvoiceUpdatableAbi}__ and `eventName` set to `"Ruling"`
 */
export const useWatchSmartInvoiceUpdatableRulingEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: smartInvoiceUpdatableAbi,
    eventName: 'Ruling',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link smartInvoiceUpdatableAbi}__ and `eventName` set to `"UpdatedClient"`
 */
export const useWatchSmartInvoiceUpdatableUpdatedClientEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: smartInvoiceUpdatableAbi,
    eventName: 'UpdatedClient',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link smartInvoiceUpdatableAbi}__ and `eventName` set to `"UpdatedProvider"`
 */
export const useWatchSmartInvoiceUpdatableUpdatedProviderEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: smartInvoiceUpdatableAbi,
    eventName: 'UpdatedProvider',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link smartInvoiceUpdatableAbi}__ and `eventName` set to `"UpdatedProviderReceiver"`
 */
export const useWatchSmartInvoiceUpdatableUpdatedProviderReceiverEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: smartInvoiceUpdatableAbi,
    eventName: 'UpdatedProviderReceiver',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link smartInvoiceUpdatableAbi}__ and `eventName` set to `"Verified"`
 */
export const useWatchSmartInvoiceUpdatableVerifiedEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: smartInvoiceUpdatableAbi,
    eventName: 'Verified',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link smartInvoiceUpdatableAbi}__ and `eventName` set to `"Withdraw"`
 */
export const useWatchSmartInvoiceUpdatableWithdrawEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: smartInvoiceUpdatableAbi,
    eventName: 'Withdraw',
  });
