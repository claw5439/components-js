<!-- Do not edit this file. It is automatically generated by API Documenter. -->

# participantEventSelector

**Signature:**

```typescript
export declare function participantEventSelector<T extends ParticipantEvent>(
  participant: Participant,
  event: T,
): Observable<Parameters<ParticipantEventCallbacks[Extract<T, keyof ParticipantEventCallbacks>]>>;
```
