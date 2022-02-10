sudo podman ps -a| grep -v CONTAINER|awk '{ print $1 }' | xargs -t -I ARGS sh -c '{ sudo podman stop ARGS; sudo podman rm ARGS; }'
