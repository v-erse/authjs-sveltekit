<script lang="ts">
  import { signIn, signOut } from "@auth/sveltekit/client";
</script>

<button on:click={() => signIn("github")}>Sign In with GitHub</button>
<button on:click={() => signOut()}>Sign Out</button>

<slot />
