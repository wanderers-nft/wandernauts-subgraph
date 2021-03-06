// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Account extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Account entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Account entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Account", id.toString(), this);
    }
  }

  static load(id: string): Account | null {
    return changetype<Account | null>(store.get("Account", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get asERC721(): string | null {
    let value = this.get("asERC721");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set asERC721(value: string | null) {
    if (!value) {
      this.unset("asERC721");
    } else {
      this.set("asERC721", Value.fromString(<string>value));
    }
  }

  get ERC721tokens(): Array<string> {
    let value = this.get("ERC721tokens");
    return value!.toStringArray();
  }

  set ERC721tokens(value: Array<string>) {
    this.set("ERC721tokens", Value.fromStringArray(value));
  }

  get ERC721operatorOwner(): Array<string> {
    let value = this.get("ERC721operatorOwner");
    return value!.toStringArray();
  }

  set ERC721operatorOwner(value: Array<string>) {
    this.set("ERC721operatorOwner", Value.fromStringArray(value));
  }

  get ERC721operatorOperator(): Array<string> {
    let value = this.get("ERC721operatorOperator");
    return value!.toStringArray();
  }

  set ERC721operatorOperator(value: Array<string>) {
    this.set("ERC721operatorOperator", Value.fromStringArray(value));
  }

  get ERC721transferFromEvent(): Array<string> {
    let value = this.get("ERC721transferFromEvent");
    return value!.toStringArray();
  }

  set ERC721transferFromEvent(value: Array<string>) {
    this.set("ERC721transferFromEvent", Value.fromStringArray(value));
  }

  get ERC721transferToEvent(): Array<string> {
    let value = this.get("ERC721transferToEvent");
    return value!.toStringArray();
  }

  set ERC721transferToEvent(value: Array<string>) {
    this.set("ERC721transferToEvent", Value.fromStringArray(value));
  }

  get asAccessControl(): string | null {
    let value = this.get("asAccessControl");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set asAccessControl(value: string | null) {
    if (!value) {
      this.unset("asAccessControl");
    } else {
      this.set("asAccessControl", Value.fromString(<string>value));
    }
  }

  get membership(): Array<string> {
    let value = this.get("membership");
    return value!.toStringArray();
  }

  set membership(value: Array<string>) {
    this.set("membership", Value.fromStringArray(value));
  }

  get roleGranted(): Array<string> {
    let value = this.get("roleGranted");
    return value!.toStringArray();
  }

  set roleGranted(value: Array<string>) {
    this.set("roleGranted", Value.fromStringArray(value));
  }

  get roleGrantedSender(): Array<string> {
    let value = this.get("roleGrantedSender");
    return value!.toStringArray();
  }

  set roleGrantedSender(value: Array<string>) {
    this.set("roleGrantedSender", Value.fromStringArray(value));
  }

  get roleRevoked(): Array<string> {
    let value = this.get("roleRevoked");
    return value!.toStringArray();
  }

  set roleRevoked(value: Array<string>) {
    this.set("roleRevoked", Value.fromStringArray(value));
  }

  get roleRevokedSender(): Array<string> {
    let value = this.get("roleRevokedSender");
    return value!.toStringArray();
  }

  set roleRevokedSender(value: Array<string>) {
    this.set("roleRevokedSender", Value.fromStringArray(value));
  }

  get asPausable(): string | null {
    let value = this.get("asPausable");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set asPausable(value: string | null) {
    if (!value) {
      this.unset("asPausable");
    } else {
      this.set("asPausable", Value.fromString(<string>value));
    }
  }

  get events(): Array<string> {
    let value = this.get("events");
    return value!.toStringArray();
  }

  set events(value: Array<string>) {
    this.set("events", Value.fromStringArray(value));
  }
}

export class ERC721Contract extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("asAccount", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ERC721Contract entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save ERC721Contract entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("ERC721Contract", id.toString(), this);
    }
  }

  static load(id: string): ERC721Contract | null {
    return changetype<ERC721Contract | null>(store.get("ERC721Contract", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get asAccount(): string {
    let value = this.get("asAccount");
    return value!.toString();
  }

  set asAccount(value: string) {
    this.set("asAccount", Value.fromString(value));
  }

  get supportsMetadata(): boolean {
    let value = this.get("supportsMetadata");
    return value!.toBoolean();
  }

  set supportsMetadata(value: boolean) {
    this.set("supportsMetadata", Value.fromBoolean(value));
  }

  get name(): string | null {
    let value = this.get("name");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set name(value: string | null) {
    if (!value) {
      this.unset("name");
    } else {
      this.set("name", Value.fromString(<string>value));
    }
  }

  get symbol(): string | null {
    let value = this.get("symbol");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set symbol(value: string | null) {
    if (!value) {
      this.unset("symbol");
    } else {
      this.set("symbol", Value.fromString(<string>value));
    }
  }

  get tokens(): Array<string> {
    let value = this.get("tokens");
    return value!.toStringArray();
  }

  set tokens(value: Array<string>) {
    this.set("tokens", Value.fromStringArray(value));
  }

  get operators(): Array<string> {
    let value = this.get("operators");
    return value!.toStringArray();
  }

  set operators(value: Array<string>) {
    this.set("operators", Value.fromStringArray(value));
  }

  get transfers(): Array<string> {
    let value = this.get("transfers");
    return value!.toStringArray();
  }

  set transfers(value: Array<string>) {
    this.set("transfers", Value.fromStringArray(value));
  }
}

export class ERC721Token extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("contract", Value.fromString(""));
    this.set("identifier", Value.fromBigInt(BigInt.zero()));
    this.set("owner", Value.fromString(""));
    this.set("approval", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ERC721Token entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save ERC721Token entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("ERC721Token", id.toString(), this);
    }
  }

  static load(id: string): ERC721Token | null {
    return changetype<ERC721Token | null>(store.get("ERC721Token", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get contract(): string {
    let value = this.get("contract");
    return value!.toString();
  }

  set contract(value: string) {
    this.set("contract", Value.fromString(value));
  }

  get identifier(): BigInt {
    let value = this.get("identifier");
    return value!.toBigInt();
  }

  set identifier(value: BigInt) {
    this.set("identifier", Value.fromBigInt(value));
  }

  get owner(): string {
    let value = this.get("owner");
    return value!.toString();
  }

  set owner(value: string) {
    this.set("owner", Value.fromString(value));
  }

  get approval(): string {
    let value = this.get("approval");
    return value!.toString();
  }

  set approval(value: string) {
    this.set("approval", Value.fromString(value));
  }

  get uri(): string | null {
    let value = this.get("uri");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set uri(value: string | null) {
    if (!value) {
      this.unset("uri");
    } else {
      this.set("uri", Value.fromString(<string>value));
    }
  }

  get transfers(): Array<string> {
    let value = this.get("transfers");
    return value!.toStringArray();
  }

  set transfers(value: Array<string>) {
    this.set("transfers", Value.fromStringArray(value));
  }
}

export class ERC721Operator extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("contract", Value.fromString(""));
    this.set("owner", Value.fromString(""));
    this.set("operator", Value.fromString(""));
    this.set("approved", Value.fromBoolean(false));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ERC721Operator entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save ERC721Operator entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("ERC721Operator", id.toString(), this);
    }
  }

  static load(id: string): ERC721Operator | null {
    return changetype<ERC721Operator | null>(store.get("ERC721Operator", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get contract(): string {
    let value = this.get("contract");
    return value!.toString();
  }

  set contract(value: string) {
    this.set("contract", Value.fromString(value));
  }

  get owner(): string {
    let value = this.get("owner");
    return value!.toString();
  }

  set owner(value: string) {
    this.set("owner", Value.fromString(value));
  }

  get operator(): string {
    let value = this.get("operator");
    return value!.toString();
  }

  set operator(value: string) {
    this.set("operator", Value.fromString(value));
  }

  get approved(): boolean {
    let value = this.get("approved");
    return value!.toBoolean();
  }

  set approved(value: boolean) {
    this.set("approved", Value.fromBoolean(value));
  }
}

export class ERC721Transfer extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("emitter", Value.fromString(""));
    this.set("transaction", Value.fromString(""));
    this.set("timestamp", Value.fromBigInt(BigInt.zero()));
    this.set("contract", Value.fromString(""));
    this.set("token", Value.fromString(""));
    this.set("from", Value.fromString(""));
    this.set("to", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ERC721Transfer entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save ERC721Transfer entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("ERC721Transfer", id.toString(), this);
    }
  }

  static load(id: string): ERC721Transfer | null {
    return changetype<ERC721Transfer | null>(store.get("ERC721Transfer", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get emitter(): string {
    let value = this.get("emitter");
    return value!.toString();
  }

  set emitter(value: string) {
    this.set("emitter", Value.fromString(value));
  }

  get transaction(): string {
    let value = this.get("transaction");
    return value!.toString();
  }

  set transaction(value: string) {
    this.set("transaction", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get contract(): string {
    let value = this.get("contract");
    return value!.toString();
  }

  set contract(value: string) {
    this.set("contract", Value.fromString(value));
  }

  get token(): string {
    let value = this.get("token");
    return value!.toString();
  }

  set token(value: string) {
    this.set("token", Value.fromString(value));
  }

  get from(): string {
    let value = this.get("from");
    return value!.toString();
  }

  set from(value: string) {
    this.set("from", Value.fromString(value));
  }

  get to(): string {
    let value = this.get("to");
    return value!.toString();
  }

  set to(value: string) {
    this.set("to", Value.fromString(value));
  }
}

export class AccessControl extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("asAccount", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save AccessControl entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save AccessControl entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("AccessControl", id.toString(), this);
    }
  }

  static load(id: string): AccessControl | null {
    return changetype<AccessControl | null>(store.get("AccessControl", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get asAccount(): string {
    let value = this.get("asAccount");
    return value!.toString();
  }

  set asAccount(value: string) {
    this.set("asAccount", Value.fromString(value));
  }

  get roles(): Array<string> {
    let value = this.get("roles");
    return value!.toStringArray();
  }

  set roles(value: Array<string>) {
    this.set("roles", Value.fromStringArray(value));
  }
}

export class Role extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Role entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Role entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Role", id.toString(), this);
    }
  }

  static load(id: string): Role | null {
    return changetype<Role | null>(store.get("Role", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get roleOf(): Array<string> {
    let value = this.get("roleOf");
    return value!.toStringArray();
  }

  set roleOf(value: Array<string>) {
    this.set("roleOf", Value.fromStringArray(value));
  }
}

export class AccessControlRole extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("contract", Value.fromString(""));
    this.set("role", Value.fromString(""));
    this.set("admin", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save AccessControlRole entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save AccessControlRole entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("AccessControlRole", id.toString(), this);
    }
  }

  static load(id: string): AccessControlRole | null {
    return changetype<AccessControlRole | null>(
      store.get("AccessControlRole", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get contract(): string {
    let value = this.get("contract");
    return value!.toString();
  }

  set contract(value: string) {
    this.set("contract", Value.fromString(value));
  }

  get role(): string {
    let value = this.get("role");
    return value!.toString();
  }

  set role(value: string) {
    this.set("role", Value.fromString(value));
  }

  get admin(): string {
    let value = this.get("admin");
    return value!.toString();
  }

  set admin(value: string) {
    this.set("admin", Value.fromString(value));
  }

  get adminOf(): Array<string> {
    let value = this.get("adminOf");
    return value!.toStringArray();
  }

  set adminOf(value: Array<string>) {
    this.set("adminOf", Value.fromStringArray(value));
  }

  get members(): Array<string> {
    let value = this.get("members");
    return value!.toStringArray();
  }

  set members(value: Array<string>) {
    this.set("members", Value.fromStringArray(value));
  }

  get roleGranted(): Array<string> {
    let value = this.get("roleGranted");
    return value!.toStringArray();
  }

  set roleGranted(value: Array<string>) {
    this.set("roleGranted", Value.fromStringArray(value));
  }

  get roleRevoked(): Array<string> {
    let value = this.get("roleRevoked");
    return value!.toStringArray();
  }

  set roleRevoked(value: Array<string>) {
    this.set("roleRevoked", Value.fromStringArray(value));
  }

  get roleAdminChanged(): Array<string> {
    let value = this.get("roleAdminChanged");
    return value!.toStringArray();
  }

  set roleAdminChanged(value: Array<string>) {
    this.set("roleAdminChanged", Value.fromStringArray(value));
  }
}

export class AccessControlRoleMember extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("accesscontrolrole", Value.fromString(""));
    this.set("account", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id != null,
      "Cannot save AccessControlRoleMember entity without an ID"
    );
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save AccessControlRoleMember entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("AccessControlRoleMember", id.toString(), this);
    }
  }

  static load(id: string): AccessControlRoleMember | null {
    return changetype<AccessControlRoleMember | null>(
      store.get("AccessControlRoleMember", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get accesscontrolrole(): string {
    let value = this.get("accesscontrolrole");
    return value!.toString();
  }

  set accesscontrolrole(value: string) {
    this.set("accesscontrolrole", Value.fromString(value));
  }

  get account(): string {
    let value = this.get("account");
    return value!.toString();
  }

  set account(value: string) {
    this.set("account", Value.fromString(value));
  }
}

export class RoleAdminChanged extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("emitter", Value.fromString(""));
    this.set("transaction", Value.fromString(""));
    this.set("timestamp", Value.fromBigInt(BigInt.zero()));
    this.set("role", Value.fromString(""));
    this.set("newAdminRole", Value.fromString(""));
    this.set("previousAdminRole", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save RoleAdminChanged entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save RoleAdminChanged entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("RoleAdminChanged", id.toString(), this);
    }
  }

  static load(id: string): RoleAdminChanged | null {
    return changetype<RoleAdminChanged | null>(
      store.get("RoleAdminChanged", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get emitter(): string {
    let value = this.get("emitter");
    return value!.toString();
  }

  set emitter(value: string) {
    this.set("emitter", Value.fromString(value));
  }

  get transaction(): string {
    let value = this.get("transaction");
    return value!.toString();
  }

  set transaction(value: string) {
    this.set("transaction", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get role(): string {
    let value = this.get("role");
    return value!.toString();
  }

  set role(value: string) {
    this.set("role", Value.fromString(value));
  }

  get newAdminRole(): string {
    let value = this.get("newAdminRole");
    return value!.toString();
  }

  set newAdminRole(value: string) {
    this.set("newAdminRole", Value.fromString(value));
  }

  get previousAdminRole(): string {
    let value = this.get("previousAdminRole");
    return value!.toString();
  }

  set previousAdminRole(value: string) {
    this.set("previousAdminRole", Value.fromString(value));
  }
}

export class RoleGranted extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("emitter", Value.fromString(""));
    this.set("transaction", Value.fromString(""));
    this.set("timestamp", Value.fromBigInt(BigInt.zero()));
    this.set("role", Value.fromString(""));
    this.set("account", Value.fromString(""));
    this.set("sender", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save RoleGranted entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save RoleGranted entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("RoleGranted", id.toString(), this);
    }
  }

  static load(id: string): RoleGranted | null {
    return changetype<RoleGranted | null>(store.get("RoleGranted", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get emitter(): string {
    let value = this.get("emitter");
    return value!.toString();
  }

  set emitter(value: string) {
    this.set("emitter", Value.fromString(value));
  }

  get transaction(): string {
    let value = this.get("transaction");
    return value!.toString();
  }

  set transaction(value: string) {
    this.set("transaction", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get role(): string {
    let value = this.get("role");
    return value!.toString();
  }

  set role(value: string) {
    this.set("role", Value.fromString(value));
  }

  get account(): string {
    let value = this.get("account");
    return value!.toString();
  }

  set account(value: string) {
    this.set("account", Value.fromString(value));
  }

  get sender(): string {
    let value = this.get("sender");
    return value!.toString();
  }

  set sender(value: string) {
    this.set("sender", Value.fromString(value));
  }
}

export class RoleRevoked extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("emitter", Value.fromString(""));
    this.set("transaction", Value.fromString(""));
    this.set("timestamp", Value.fromBigInt(BigInt.zero()));
    this.set("role", Value.fromString(""));
    this.set("account", Value.fromString(""));
    this.set("sender", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save RoleRevoked entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save RoleRevoked entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("RoleRevoked", id.toString(), this);
    }
  }

  static load(id: string): RoleRevoked | null {
    return changetype<RoleRevoked | null>(store.get("RoleRevoked", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get emitter(): string {
    let value = this.get("emitter");
    return value!.toString();
  }

  set emitter(value: string) {
    this.set("emitter", Value.fromString(value));
  }

  get transaction(): string {
    let value = this.get("transaction");
    return value!.toString();
  }

  set transaction(value: string) {
    this.set("transaction", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get role(): string {
    let value = this.get("role");
    return value!.toString();
  }

  set role(value: string) {
    this.set("role", Value.fromString(value));
  }

  get account(): string {
    let value = this.get("account");
    return value!.toString();
  }

  set account(value: string) {
    this.set("account", Value.fromString(value));
  }

  get sender(): string {
    let value = this.get("sender");
    return value!.toString();
  }

  set sender(value: string) {
    this.set("sender", Value.fromString(value));
  }
}

export class Pausable extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("asAccount", Value.fromString(""));
    this.set("isPaused", Value.fromBoolean(false));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Pausable entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Pausable entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Pausable", id.toString(), this);
    }
  }

  static load(id: string): Pausable | null {
    return changetype<Pausable | null>(store.get("Pausable", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get asAccount(): string {
    let value = this.get("asAccount");
    return value!.toString();
  }

  set asAccount(value: string) {
    this.set("asAccount", Value.fromString(value));
  }

  get isPaused(): boolean {
    let value = this.get("isPaused");
    return value!.toBoolean();
  }

  set isPaused(value: boolean) {
    this.set("isPaused", Value.fromBoolean(value));
  }

  get paused(): Array<string> {
    let value = this.get("paused");
    return value!.toStringArray();
  }

  set paused(value: Array<string>) {
    this.set("paused", Value.fromStringArray(value));
  }
}

export class Paused extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("emitter", Value.fromString(""));
    this.set("transaction", Value.fromString(""));
    this.set("timestamp", Value.fromBigInt(BigInt.zero()));
    this.set("contract", Value.fromString(""));
    this.set("isPaused", Value.fromBoolean(false));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Paused entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Paused entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Paused", id.toString(), this);
    }
  }

  static load(id: string): Paused | null {
    return changetype<Paused | null>(store.get("Paused", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get emitter(): string {
    let value = this.get("emitter");
    return value!.toString();
  }

  set emitter(value: string) {
    this.set("emitter", Value.fromString(value));
  }

  get transaction(): string {
    let value = this.get("transaction");
    return value!.toString();
  }

  set transaction(value: string) {
    this.set("transaction", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get contract(): string {
    let value = this.get("contract");
    return value!.toString();
  }

  set contract(value: string) {
    this.set("contract", Value.fromString(value));
  }

  get isPaused(): boolean {
    let value = this.get("isPaused");
    return value!.toBoolean();
  }

  set isPaused(value: boolean) {
    this.set("isPaused", Value.fromBoolean(value));
  }
}

export class Transaction extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("timestamp", Value.fromBigInt(BigInt.zero()));
    this.set("blockNumber", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Transaction entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Transaction entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Transaction", id.toString(), this);
    }
  }

  static load(id: string): Transaction | null {
    return changetype<Transaction | null>(store.get("Transaction", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value!.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get events(): Array<string> {
    let value = this.get("events");
    return value!.toStringArray();
  }

  set events(value: Array<string>) {
    this.set("events", Value.fromStringArray(value));
  }
}
