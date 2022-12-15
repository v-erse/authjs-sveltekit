<script lang="ts">
  import { signIn } from "@auth/sveltekit/client";
</script>

<button on:click="{signIn}">Sign in</button>
